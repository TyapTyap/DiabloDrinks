<template>
    <div class="row my-border">
        <div class="table-responsive-lg table-responsive-mg">
            <h1>Felhasználók adati</h1>
            <table class="table-sm">
                <thead>
                    <tr>
                        <th scope="col">E-mail</th>
                        <th scope="col">Keresztnév</th>
                        <th scope="col">Vezetéknév</th>
                        <th scope="col">Telefonszám</th>
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
                        v-for="(user, index) in users"
                        :key="index"
                        class="static"
                        @click="onClickRow(user.id)"
                        :class="{ 'bg-primary': user.id == isValid }">
                        <td>{{ user.email }}</td>
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.phoneNumber }}</td>
                        <td>
                            <!-- edit -->
                            <button
                                type="button"
                                class="btn btn-online-warning ms-1 btn-sm"
                                @click="onClickEdit(user.id)">
                                <i class="bi bi-pencil"></i>
                            </button>

                            <!-- delete -->
                            <button
                                type="button"
                                class="btn btn-online-danger ms-1 btn-sm"
                                @click="onClickDelete(user.id)">
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
                            <!-- E-mail -->
                            <div class="mb-3 col-12">
                                <label for="email" class="form-label"
                                    >E-mail:
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    placeholder="example@gmail.com"
                                    v-model="user.email"
                                    required />
                                <div class="invalid-feedback">
                                    E-mail kötelező!
                                </div>
                            </div>
                            <!-- Firstname -->
                            <div class="mb-3 col-6">
                                <label for="firstName" class="form-label"
                                    >Keresztnév:
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="firstName"
                                    placeholder="Keresztnév"
                                    v-model="user.firstName"
                                    required />
                                <div class="invalid-feedback">
                                    Keresztnév kötelező!
                                </div>
                            </div>
                            <!-- Lastname -->
                            <div class="mb-3 col-6">
                                <label for="lastName" class="form-label"
                                    >Vezetéknév:
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="lastName"
                                    placeholder="Vezetéknév"
                                    v-model="user.lastName"
                                    required />
                                <div class="invalid-feedback">
                                    Vezetéknév kötelező!
                                </div>
                            </div>
                            <!-- fhoneNumber -->
                            <div class="mb-3 col-6">
                                <label for="phoneNumber" class="form-label"
                                    >Telefonszám:
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="phoneNumber"
                                    placeholder="Telefonszám"
                                    v-model="user.phoneNumber"
                                    required />
                                <div class="invalid-feedback">
                                    Telefonszám kötelező!
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
class User {
    constructor(
        id = null,
        firstName = null,
        lastName = null,
        email = null,
        password = null,
        phoneNumber = null,
        permission = null
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.permission = permission;
    }
}

import * as bootstrap from "bootstrap";

export default {
    name: "User",
    data() {
        return {
            users: [],
            state: "view",
            stateTitle: null,
            user: new User(),
            form: null,
            isValid: null,
        };
    },
    created() {
        this.GetUsers();
    },
    mounted() {
        this.modal = new bootstrap.Modal(document.getElementById("modal"), {
            Keyboard: false,
        });
        this.form = document.querySelector(".needs-validation");
    },
    methods: {
        GetUsers() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/users`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.users = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.users = [];
                });
        },
        GetUserById(id) {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/users/${id}`;
            console.log(url)
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data,) => {
                    console.log("Success:", data.data);
                    this.user = data.data[0];
                    console.log("ez:",this.user)
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.users = [];
                });
        },
        putUser() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/users`;
            let data = this.user;
            console.log("put",this.user);
            fetch(url, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success put:", data.data);
                    this.GetUsers();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        deleteUser(id) {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/users`;
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
                    this.GetUsers();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        newUser() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/users`;
            let data = this.user;
            delete data.id;
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.GetUsers();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        onClickNew() {
            this.state = "new";
            this.stateTitle = "Új felhasználó";
            this.user = new User();
            this.modal.show();
        },
        onClickEdit(id) {
            console.log("valami:",id)
            this.state = "edit";
            this.stateTitle = "Adatmódosítás";
            this.modal.show();
            this.GetUserById(id);
        },
        onClickDelete(id) {
            this.state = "delete";
            this.deleteUser(id);
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
                    this.putUser();
                } else if (this.state == "new") {
                    //post
                    this.newUser();
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