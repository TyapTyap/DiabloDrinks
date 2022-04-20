!<template>
    <div class="my-border">
        <h1>Regisztáció</h1>

            <div class="mb-3">
                <label for="email" class="form-label">E-mail cím:</label>
                <input
                    type="email"
                    class="form-control static"
                    id="email"
                    v-model="registrationData.email" />
            </div>
            <div class="row">
                <div class="mb-3 float-start col-sm-6 col-12 col-md-4">
                    <label for="firstName" class="form-label"
                        >Vezeték név:</label
                    >
                    <div>
                        <input
                            type="text"
                            class="form-control"
                            id="firstName"
                            v-model="registrationData.firstName" />
                    </div>
                </div>
                <div class="mb-3 float-start col-sm-6 col-12 col-md-4">
                    <label for="lastName" class="form-label"
                        >Kereszt név:</label
                    >
                    <div>
                        <input
                            type="text"
                            class="form-control"
                            id="lastName"
                            v-model="registrationData.lastName" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="mb-3 float-start col-sm-6 col-12 col-md-4">
                    <label for="password" class="form-label">Jelszó:</label>
                    <div>
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                            v-model="registrationData.password" />
                    </div>
                </div>
                <div class="mb-3 float-start col-sm-6 col-12 col-md-4">
                    <label for="phoneNumber" class="form-label"
                        >Telefonszám:</label
                    >
                    <div>
                        <input
                            type="text"
                            class="form-control"
                            id="phoneNumber"
                            v-model="registrationData.phoneNumber" />
                    </div>
                </div>
            </div>
            <button
                type="button"
                class="btn btn-danger"
                @click="onClickRegistration()">
                Regisztálás
            </button>
            <div class="alert alert-danger m-3" role="alert" v-if="noSuccess">
                A regisztáció sikertelen: Már létezik ilyen e-mail vagy Túl
                egyszerű a jelszó!
            </div>
            <div>
                <ul>
                    <li>{{ registrationResponse.success }}</li>
                    <li>{{ registrationResponse.message }}</li>
                </ul>
                <textarea
                    name=""
                    id=""
                    cols="85"
                    rows="5"
                    v-model="registrationResponse.token"></textarea>
            </div>
        </div>
</template>

<script>
export default {
    name: "Registration",
    data() {
        return {
            registrationData: {
                email: "",
                firstName: "",
                lastName: "",
                password: "",
                phoneNumber: "",
            },
             registrationResponse: {
                success: 0,
                message: "",
                token: null,
            },
            noSuccess: false,
        };
    },
    methods: {
        onClickRegistration() {
            const url = `${this.$loginServer}/api/users/registration`;
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            fetch(url, {
                method: "Post", // or 'PUT'
                headers: headers,
                body: JSON.stringify(this.registrationData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                    if (data.success) {
                        this.$router.push({ path: "/login/" });
                    } else {
                        this.noSuccess = true;
                        setTimeout(() => {
                            this.noSuccess = false;
                        }, 2000);
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
    },
};
</script>

<style>
</style>