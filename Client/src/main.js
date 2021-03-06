import Vue from "vue";
import App from "./App.vue";

import VueResource from "vue-resource";
import VueRouter from "vue-router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
//Ebben van leírva, hogy működik a route
import RouteConfig from "./config/routes.js";

//Így indíjuk a router-t
const router = new VueRouter({
    routes: RouteConfig,
});

//A VueResource, VueRouter használatba vétele
Vue.use(VueResource);
Vue.use(VueRouter);

class User {
    constructor(firstName = null, lastName = null, email = null, password = null, phoneNumber = null, permission = null) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.permission = permission;
    }
}

Vue.config.productionTip = false;

Vue.prototype.$loginServer = "http://localhost:3000";

let x = new Vue({
    router,
    data() {
        return {
            token: null,
            user: new User()
        };
    },
    created(){
        if (this.$route.path !== "/"){
            this.$router.push({
                path: "/"
            });
        }
    },
    render: h => h(App),
}).$mount("#app");

router.beforeEach((to, from, next) => {
    let loggedIn = x.$data.token

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!loggedIn) {
            next({
                path: '/login/'
            })
        } else {
            next()
        }
    } else {
        next()
    }
});