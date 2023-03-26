<template>
  <form @submit.prevent="submitForm">
    <h2>로그인</h2>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button type="submit">Log In</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post("/api/postTest", {
          username: this.username,
          password: this.password,
        });
        console.log("cc");
        console.log(response.statusText);
        if (response.statusText == "ok") {
          location.href = "/memo";
        }
        // 로그인 성공 처리
      } catch (error) {
        console.error(error);
        // 로그인 실패 처리
      }
    },
  },
};
</script>
