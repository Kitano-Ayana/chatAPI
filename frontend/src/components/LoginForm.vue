<template>
  <div>
    <form @submit.prevent="login">
      <div>
        <label for="username">ユーザー名:</label>
        <input id="username" v-model="credentials.username" type="text" required>
      </div>
      <div>
        <label for="password">パスワード:</label>
        <input id="password" v-model="credentials.password" type="password" required>
      </div>
      <button type="submit">ログイン</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:8080/login', this.credentials);
        // ログイン成功時の処理
      } catch (error) {
        // エラー処理
      }
    }
  }
};
</script>
