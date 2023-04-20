<template>
  <div>
    <h2>Please Log In</h2>
    <form v-on:submit.prevent="submitForm">
      <p>
        <input
          class="w3-input"
          name="uid"
          placeholder="Enter your ID"
          v-model="user_id"
        /><br />
      </p>
      <p>
        <input
          name="password"
          class="w3-input"
          placeholder="Enter your password"
          v-model="user_pw"
          type="password"
        />
      </p>
      <p>
        <button type="submit" class="w3-button w3-green w3-round">Login</button>
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user_id: "",
      user_pw: "",
    };
  },
  methods: {
    submitForm() {
      console.log(this.user_id, this.user_pw);
      const url = "https://jsonplaceholder.typicode.com/users";
      const data = {
        username: this.user_id,
        password: this.user_pw,
      };
      axios
        .post(url, data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
#loginForm {
  width: 500px;
  margin: auto;
}
</style>
