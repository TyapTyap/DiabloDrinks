<template>
    <div class="p-3">
        <h1>Belépés</h1>
        <div class="row">
        <div class="mb-3">
            <label for="email" class="form-label">E-mail cím:</label>
            <input
                type="email"
                class="form-control"
                id="email"
                placeholder="E-mail cím"
                v-model="loginData.email" />
        </div>
            <label for="password" class="form-label">Jelszó:</label>
        <div class="mb-3">
            <div class="col-sm-6">
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Jelszó"
                    v-model="loginData.password" />
            </div>
        </div>
        </div>
        <button type="button" class="btn btn-primary" @click="onClickLogin()">
            Belépés
        </button>
        <div class="alert alert-danger m-3" role="alert" v-if="noSuccess">
            A bejelntkezés sikertelen: Rossz email vagy jelszó!
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            loginData: {
                email: "admin@gmail.com",
                password: "admin123456789",
            },
            noSuccess: false,
        };
    },
    methods: {
        onClickLogin() {
            const url = `${this.$loginServer}/api/users/login`;
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            fetch(url, {
                method: "POST", // or 'PUT'
                headers: headers,
                body: JSON.stringify(this.loginData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                    this.loginResponse = data;
                    this.$root.$data.token = data.token;
                    this.$root.$data.user = data.data;
                    if (data.success) {
                        this.$router.push({path: "/"})
                    } else {
                        this.noSuccess = true;
                        setTimeout(()=>{
                            this.noSuccess = false;
                        },2000)
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
.float{
    text-align: center;
}
</style>