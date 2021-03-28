<template>
   <div>
      <h1 class="text-center mb-5">Register</h1>

    <error :errors="v$.$errors" :error="error"></error>

    <div class="row justify-content-center">
        <div class="col-6">
   <form @submit.prevent="register">
        <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" v-model="form.name" :class="{ 'is-invalid': v$.form.name.$error }">
    <div class="invalid-feedback" v-if="v$.form.name.$error">
                    <span v-for="(error, index) of v$.form.name.$errors" :key="index">{{ error.$message }}</span>
                </div>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email"  v-model="form.email" :class="{ 'is-invalid': v$.form.email.$error }">
        <div class="invalid-feedback" v-if="v$.form.email.$error">
                    <span v-for="(error, index) of v$.form.email.$errors" :key="index">{{ error.$message }}</span>
                </div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password"  v-model="form.password" :class="{ 'is-invalid': v$.form.password.$error }">
     <div class="invalid-feedback" v-if="v$.form.password.$error">
         ferge
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
import Error from '@/components/Error'

export default {
  name: 'Register',
     setup () {
    return { v$: useVuelidate() }
  },
  data() {
      return {
          form: {},
          error: ""
      }
  },
   validations () {
    return {
        form: {
      name: { required },
      email: { required, email },
      password : { required, minLength: minLength(8) }
        }
    }
   },
  methods: {
      register() {
          console.log(this.form)

          console.log(this.v$);

     this.v$.$touch()
      if (this.v$.$error) return

firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    this.error = error;
  });
      }
  },
  components: {
      Error
  }
}
</script>
