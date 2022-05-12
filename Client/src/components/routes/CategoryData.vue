<template>
    <div class="row my-border">
        <div>
            <h1>Kategória adati</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Kategória név</th>
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
                        v-for="(category, index) in categories"
                        :key="index"
                        class="static"
                        @click="onClickRow(category.id)"
                        :class="{ 'bg-primary': category.id == isValid }">
                        <td>{{ category.CategoryName }}</td>
                        <td>
                            <!-- edit -->
                            <button
                                type="button"
                                class="btn btn-online-warning ms-1 btn-sm"
                                @click="onClickEdit(category.id)">
                                <i class="bi bi-pencil"></i>
                            </button>

                            <!-- delete -->
                            <button
                                type="button"
                                class="btn btn-online-danger ms-1 btn-sm"
                                @click="onClickDelete(category.id)">
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
                            <!-- kategória -->
                            <div class="mb-3 col-6">
                                <label for="CategoryName" class="form-label"
                                    >Kategória név:
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="CategoryName"
                                    placeholder="Kategória név"
                                    v-model="category.CategoryName"
                                    required />
                                <div class="invalid-feedback">
                                    Kategória név kötelező!
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
class Category {
    constructor(
        id = null,
        CategoryName = null,
    ) {
        this.id = id;
        this.CategoryName = CategoryName;
    }
}

import * as bootstrap from "bootstrap";

export default {
    name: "categordata",
    data() {
        return {
            categories: [],
            state: "view",
            stateTitle: null,
            category: new Category(),
            form: null,
            isValid: null,
        };
    },
    created() {
        this.GetCategoryes();
    },
    mounted() {
        this.modal = new bootstrap.Modal(document.getElementById("modal"), {
            Keyboard: false,
        });
        this.form = document.querySelector(".needs-validation");
    },
    methods: {
        GetCategoryes() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/users/category/categories`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.categories = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.categories = [];
                });
        },
        GetCategoryById(id) {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/users/category/categories/${id}`;

            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data,) => {
                    console.log("Success:", data.data);
                    this.category = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.categories = [];
                });
        },
        putCategory() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/users/category`;
            let data = this.category;
            fetch(url, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.GetCategoryes();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        deleteCategory(id) {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/users/category`;
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
                    this.GetCategoryes();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        newCategory() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/users/category`;
            let data = this.category;
            delete data.id;
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.GetCategoryes();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        onClickNew() {
            this.state = "new";
            this.stateTitle = "Új Kategória";
            this.user = new Category();
            this.modal.show();
        },
        onClickEdit(id) {
            this.state = "edit";
            this.stateTitle = "Adatmódosítás";
            this.modal.show();
            this.GetCategoryById(id);
        },
        onClickDelete(id) {
            this.state = "delete";
            this.deleteCategory(id);
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
                    this.putCategory();
                } else if (this.state == "new") {
                    //post
                    this.newCategory();
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