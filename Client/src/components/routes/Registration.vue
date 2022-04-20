<template>
    <div class="my-border p-3">
        <h1>Regisztáció</h1>
        <form class="row g-3 needs-validation" novalidate>
            <!-- űrlap -->
            <!-- E-mail -->
            <div class="mb-3 col-12">
                <label for="email" class="form-label">E-mail cím: </label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="example@gmail.com"
                    v-model="registrationData.email"
                    required />
                <div class="invalid-feedback">E-mail kötelező!</div>
            </div>
            <!-- Firstname -->
            <div class="mb-3 col-6">
                <label for="firstName" class="form-label">Keresztnév: </label>
                <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder="Keresztnév"
                    v-model="registrationData.firstName"
                    required />
                <div class="invalid-feedback">Keresztnév kötelező!</div>
            </div>
            <!-- Lastname -->
            <div class="mb-3 col-6">
                <label for="lastName" class="form-label">Vezetéknév: </label>
                <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder="Vezetéknév"
                    v-model="registrationData.lastName"
                    required />
                <div class="invalid-feedback">Vezetéknév kötelező!</div>
            </div>
            <!-- password -->
            <div class="mb-3 col-6">
                <label for="password" class="form-label">Jelszó: </label>
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Jelszó"
                    v-model="registrationData.password"
                    required />
                <div class="invalid-feedback">Jelszó kötelező!</div>
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
                    v-model="registrationData.phoneNumber"
                    required />
                <div class="invalid-feedback">Telefonszám kötelező!</div>
            </div>
        </form>
        <button
            type="button"
            class="btn btn-danger"
            @click="onClickSaveData()">
            Regisztálás
        </button>
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
            noSuccess: false,
        };
    },
    mounted() {
        this.form = document.querySelector(".needs-validation");
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
        onClickSaveData() {
            this.form.classList.add("was-validated");
            if (this.form.checkValidity()) {
                    this.onClickRegistration();
            } else {
                return;
            }
        },
    },
};
</script>

<style>
</style>