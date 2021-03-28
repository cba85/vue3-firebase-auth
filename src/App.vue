<template>
  <div>
    <navbar></navbar>
  <div class="container my-5">
  <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: "App",
  components: {
  Navbar
  }
}
</script>

<style>
@import'~bootstrap/dist/css/bootstrap.css'
</style>