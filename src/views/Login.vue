<template>
  <div>
      <h1 class="text-center mb-5">Login</h1>

    <error :errors="v$.$errors"  :error="error"></error>

    <div class="row justify-content-center">
        <div class="col-6">
   <form @submit.prevent="login">
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" v-model="form.email" :class="{ 'is-invalid': v$.form.email.$error }">
        <div class="invalid-feedback" v-if="v$.form.email.$error">
                    <span v-for="(error, index) of v$.form.email.$errors" :key="index">{{ error.$message }}</span>
                </div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" v-model="form.password" :class="{ 'is-invalid': v$.form.password.$error }">
        <div class="invalid-feedback" v-if="v$.form.password.$error">
                    <span v-for="(error, index) of v$.form.password.$errors" :key="index">{{ error.$message }}</span>
                </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    </div>

  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import Error from "@/components/Error.vue";

export default {
  components: { Error },
  name: 'Login',
   setup () {
    return { v$: useVuelidate() }
  },
    validations () {
    return {
        form: {
      email: { required, email },
      password : { required, minLength: minLength(8) }
        }
    }
   },
   data() {
      return {
          form: {},
          error: ""
      }
  },
  methods: {
      login() {
          console.log(this.form)

          console.log(this.v$);

     this.v$.$touch()
      if (this.v$.$error) return

firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
     this.$router.push(
            this.$route.query.redirect || {
              name: "home"
            })
  })
  .catch((error) => {
    this.error = error;
  });
      }
  }
}
</script>
