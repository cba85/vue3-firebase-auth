<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Vue 3 Firebase Auth</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
         <router-link class="nav-link" to="/">Welcome</router-link>
        </li>
        <li class="nav-item">
           <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <router-link class="nav-link" to="/register">Register</router-link>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
name: "Navbar"
}
</script>