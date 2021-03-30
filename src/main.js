import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";

const firebaseConfig = {
  // Add your Firebase credentials here: https://firebase.google.com/docs/web/setup?authuser=0#add-sdks-initialize
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  store.dispatch("auth/fetchUser", user);
});

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
