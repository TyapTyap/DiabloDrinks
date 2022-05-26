<template>
    <div>
        <!-- 5. Cserélkük le a lineket: a -> router-link, href -> to, link -> route (útvonal) -->
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/"
                    >DiabloDrinks</router-link
                >
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="offcanvas offcanvas-end bg-dark"
                    tabindex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h4 class="offcanvas-title text-white text-center" id="offcanvasNavbarLabel">
                            Menü
                        </h4>
                        <button
                            type="button"
                            class="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <form class="d-flex">
                            <input
                                class="form-control me-2 bg-secondary"
                                type="search"
                                placeholder="Keresés"
                                aria-label="Search" />
                        </form>
                        <h6 class="offcanvas-title text-white text-center" id="offcanvasNavbarLabel">
                            Termékek
                        </h6>
                        <ul
                            class="
                                navbar-nav
                                justify-content-end
                                flex-grow-1
                                pe-3
                            ">
                            <li class="nav-item">
                                <router-link class="nav-link text-light" to="#"
                                    >Pálinka</router-link
                                >
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link text-light" to="#"
                                    >Bor és Pezsgő</router-link
                                >
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle text-light"
                                    href="#"
                                    id="offcanvasNavbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Szeszes italok
                                </a>
                                <ul
                                    class="dropdown-menu bg-secondary"
                                    aria-labelledby="offcanvasNavbarDropdown">
                                    <li>
                                        <router-link
                                            class="dropdown-item text-black"
                                            to="#"
                                            >Gin</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link
                                            class="dropdown-item text-black"
                                            to="#"
                                            >Brandy</router-link
                                        >
                                    </li>
                                     <li>
                                        <router-link
                                            class="dropdown-item text-black"
                                            to="#"
                                            >Sake</router-link
                                        >
                                    </li>
                                     <li>
                                        <router-link
                                            class="dropdown-item text-black"
                                            to="#"
                                            >Rum</router-link
                                        >
                                    </li>
                                     <li>
                                        <router-link
                                            class="dropdown-item text-black"
                                            to="#"
                                            >Keserű likőr</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link
                                            class="dropdown-item text-black"
                                            to="#"
                                            >Abszint</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link
                                            class="dropdown-item text-black"
                                            to="#"
                                            >Konyak</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link
                                            class="dropdown-item text-black"
                                            to="#"
                                            >Tequila</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link
                                            class="dropdown-item text-black"
                                            to="#"
                                            >Vodka</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link
                                            class="dropdown-item text-black"
                                            to="#"
                                            >Whiskey</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link
                                            class="dropdown-item text-black"
                                            to="#"
                                            >Japán különlegesség</router-link
                                        >
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <h6 class="offcanvas-title text-white text-center" id="offcanvasNavbarLabel">
                            Belépés és Regisztráció
                        </h6>
                        <ul
                            class="
                                navbar-nav
                                justify-content-end
                                flex-grow-1
                                pe-3
                            ">
                            <li class="nav-item">
                                <router-link
                                    class="nav-link text-light"
                                    to="/login"
                                    v-if="!loggedIn()"
                                    >Belépés</router-link
                                >
                            </li>
                            <li class="nav-item">
                                <router-link
                                    class="nav-link text-light"
                                    to="/registration/"
                                    v-if="!loggedIn()"
                                    >Regisztráció</router-link
                                >
                            </li>
                            <li class="nav-item dropdown" v-if="loggedIn()">
                                <a
                                    class="nav-link dropdown-toggle text-light"
                                    href="#"
                                    id="offcanvasNavbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    adatKarbantartás
                                </a>
                                <ul
                                    class="dropdown-menu bg-secondary"
                                    aria-labelledby="offcanvasNavbarDropdown">
                                    <li>
                                        <router-link
                                            class="dropdown-item text-black"
                                            to="/user"
                                            >Felhasználó adatai</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link
                                            class="dropdown-item text-black"
                                            to="/categorydata"
                                            >Kategória adatai</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link
                                            class="dropdown-item text-black"
                                            to="/items"
                                            >termékek adatai</router-link
                                        >
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <router-link
                                            class="dropdown-item text-black"
                                            to="/users"
                                            >Felhasználók</router-link
                                        >
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown" v-if="loggedIn()">
                                <a
                                    class="nav-link dropdown-toggle text-light"
                                    href="#"
                                    id="offcanvasNavbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    {{ $root.$data.user.firstName }}
                                </a>
                                <ul
                                    class="dropdown-menu bg-secondary"
                                    aria-labelledby="offcanvasNavbarDropdown">
                                    <li @click.prevent="onClicklogout()">
                                        <router-link
                                            class="dropdown-item text-black"
                                            to="/login"
                                            >Kilépés</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link
                                            class="dropdown-item text-black"
                                            to="/profile"
                                            >Profil</router-link
                                        >
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
class User {
    constructor(
        firstName = null,
        lastName = null,
        email = null,
        password = null,
        phoneNumber = null,
        permission = null
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.permission = permission;
    }
}

export default {
    name: "Head",
    methods: {
        loggedIn() {
            return Boolean(this.$root.$data.token);
        },
        onClicklogout() {
            this.$root.$data.token = null;
            this.$root.$data.user = new User();
        }
    },
};
</script>

<style>
</style>