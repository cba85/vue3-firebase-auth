<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Vue 3 Firebase Auth</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

 <li class="nav-item">
           <router-link class="nav-link" to="/home">Home</router-link>
        </li>
        <li class="nav-item">
           <router-link class="nav-link" to="/account">Account</router-link>
        </li>
        <li class="nav-item">
           <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
           <router-link class="nav-link" to="/register">Register</router-link>
        </li>

        <li class="nav-item" v-if="!user.loggedIn">
           <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <router-link class="nav-link" to="/register" v-if="!user.loggedIn">Register</router-link>
      </ul>
    </div>
       <div class="navbar-text" v-if="user.loggedIn">
         <router-link to="/home">{{ user.data.displayName }}</router-link> |
         <a href="#" @click.prevent="logout">Logout</a>
      </div>
  </div>
</nav>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import store from "@/store";

export default {
name: "Navbar",
 computed: {
    ...mapGetters({
      user: "auth/user"
    })
  },
   methods: {
    logout() {
      console.log("logout");
      firebase
        .auth()
        .signOut()
        .then(() => {
          store.dispatch('auth/fetchUser', null)
          this.$router.push(
            this.$route.query.redirect || {
              name: "welcome"
            })
        });
    }
  }
}
</script>