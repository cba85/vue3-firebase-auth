import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBe3ksGrtgKQVGF4bWVcgXCVtxwpwM3kdM",
  authDomain: "vue-firebase-auth-18022.firebaseapp.com",
  databaseURL: "https://vue-firebase-auth-18022.firebaseio.com",
  projectId: "vue-firebase-auth-18022",
  storageBucket: "vue-firebase-auth-18022.appspot.com",
  messagingSenderId: "1055421470615",
  appId: "1:1055421470615:web:f0c0f771489c5ec461d6d2",
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
