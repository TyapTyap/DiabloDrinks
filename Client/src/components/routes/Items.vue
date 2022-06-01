<template>
    <div class="row my-border">
        <div>
            <h1>Termékek adatai</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Termék neve</th>
                        <th scope="col">Kiszerelése</th>
                        <th scope="col">Alkohol tartalma</th>
                        <th scope="col">Márkája</th>
                        <th scope="col">
                            Műveletek
                            <!-- new -->
                            <button
                                type="button"
                                class="btn btn-online-success ms-1 btn-sm"
                                @click="onClickNew()">
                                <i class="bi bi-plus-lg"></i>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(items,index) in item" :key="index"
                        class="static"
                        @click="onClickRow(items.id)"
                        :class="{ 'bg-primary': items.id == isValid }">
                        <td>{{ items.ItemName }}</td>
                        <td>{{ items.Unit }}</td>
                        <td>{{ items.AlcoholContent }}</td>
                        <td>{{ items.Brand }}</td>
                        <td>
                            <!-- edit -->
                            <button
                                type="button"
                                class="btn btn-online-warning ms-1 btn-sm"
                                @click="onClickEdit(items.id)">
                                <i class="bi bi-pencil"></i>
                            </button>

                            <!-- delete -->
                            <button
                                type="button"
                                class="btn btn-online-danger ms-1 btn-sm"
                                @click="onClickDelete(items.id)">
                                <i class="bi bi-archive"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Button trigger modal -->
        <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
  Launch demo modal
</button> -->

        <!-- Modal -->
        <div
            class="modal fade"
            id="modal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            {{ stateTitle }}
                        </h5>

                        <button
                            type="button"
                            class="btn-close"
                            aria-label="Close"
                            @click="onClickCancel()"></button>
                    </div>
                    <div class="modal-body">
                        <form class="row g-3 needs-validation" novalidate>
                            <!-- űrlap -->
                            <!-- termék neve -->
                            <div class="mb-3 col-6">
                                <label for="ItemName" class="form-label"
                                    >Termék neve:
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="ItemName"
                                    placeholder="Termék neve"
                                    v-model="items.ItemName"
                                    required />
                                <div class="invalid-feedback">
                                    Termék neve kötelező!
                                </div>
                            </div>
                            <!-- kiszerlése -->
                            <div class="mb-3 col-6">
                                <label for="Unit" class="form-label"
                                    >Kiszerelése:
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Unit"
                                    placeholder="Kiszerelése"
                                    v-model="items.Unit"
                                    required />
                                <div class="invalid-feedback">
                                    A kiszerelés kötelező!
                                </div>
                            </div>
                            <!-- alkohol tartalma -->
                            <div class="mb-3 col-6">
                                <label for="AlcoholContent" class="form-label"
                                    >Alkohol tartalma:
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="AlcoholContent"
                                    placeholder="Alkohol tartalma"
                                    v-model="items.AlcoholContent"
                                    required />
                                <div class="invalid-feedback">
                                    Az alkohol tartalom kötelező!
                                </div>
                            </div>
                            <!-- márkája -->
                            <div class="mb-3 col-6">
                                <label for="Brand" class="form-label"
                                    >Márkája:
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Brand"
                                    placeholder="Márkája"
                                    v-model="items.Brand"
                                    required />
                                <div class="invalid-feedback">
                                    Márka kötelező!
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            @click="onClickCancel()">
                            Cancle
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="onClickSaveData()">
                            Mentés
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
class Items {
    constructor(
        id = null,
        CategoryId = null,
        ItemName = null,
        Image = null,
        Unit = null,
        AlcoholContent = null,
        Brand = null
    ) {
        this.id = id;
        this.CategoryId = CategoryId;
        this.ItemName = ItemName;
        this.Image = Image;
        this.Unit = Unit;
        this.AlcoholContent = AlcoholContent;
        this.Brand = Brand;
    }
}

import * as bootstrap from "bootstrap";

export default {
    name: "Items",
    data() {
        return {
            items: [],
            state: "view",
            stateTitle: null,
            item: new Items(),
            form: null,
            isValid: null,
        };
    },
    created() {
        this.GetItems();
    },
    mounted() {
        this.modal = new bootstrap.Modal(document.getElementById("modal"), {
            Keyboard: false,
        });
        this.form = document.querySelector(".needs-validation");
    },
    methods: {
        GetItems() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/users/items/itemList`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.item = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.items = [];
                });
        },
        GetItemsById(id) {
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/users/items/itemList/${id}`;

            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data,) => {
                    console.log("Success:", data.data);
                    this.item = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.items = [];
                });
        },
        putItems() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/users/items`;
            let data = this.item;
            fetch(url, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.GetItems();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        deleteItems(id) {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/users/items`;
            let data = {
                id: id,
            };
            fetch(url, {
                method: "DELETE",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.GetItems();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        newItems() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/users/items`;
            let data = this.item;
            delete data.id;
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.GetItems();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        onClickNew() {
            this.state = "new";
            this.stateTitle = "Új Kategória";
            this.item = new Items();
            this.modal.show();
        },
        onClickEdit(id) {
            this.state = "edit";
            this.stateTitle = "Adatmódosítás";
            this.modal.show();
            this.GetItemsById(id);
        },
        onClickDelete(id) {
            this.state = "delete";
            this.deleteItems(id);
            this.state = "view";
        },
        onClickCancel() {
            this.state = "view";
            this.modal.hide();
        },
        onClickSaveData() {
            this.form.classList.add("was-validated");
            if (this.form.checkValidity()) {
                if (this.state == "edit") {
                    //put
                    this.putItems();
                } else if (this.state == "new") {
                    //post
                    this.newItems();
                }
            } else {
                return;
            }
            this.modal.hide();
            this.state = "view";
        },
        onClickRow(id) {
            this.isValid = id;
        },
    },
};
</script>

<style>
</style>