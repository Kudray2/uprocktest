<template>
  <form class="user-login-form" @submit.prevent>
    <input type="text" placeholder="email" v-model="userFromForm.userEmail" />
    <input
      type="password"
      placeholder="password"
      v-model="userFromForm.userPassword"
    />
    <button @click="makeUserToLogin">Login</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      userFromForm: { userEmail: "", userPassword: "" },
    };
  },
  methods: {
    makeUserToLogin() {
      const userToLogin = {
        userEmail: this.userFromForm.userEmail,
        userPassword: this.userFromForm.userPassword,
      };
      this.$emit("userToLogin", userToLogin);
      this.userFromForm.userEmail = "";
      this.userFromForm.userPassword = "";
    },
  },
};
</script>
<style scoped>
.user-logn-form-container {
  height: 40vh;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
  width: 65vw;
}
.user-login-form {
  display: flex;
  flex-direction: column;
}
.user-login-form > input {
  font-size: 4vh;
  margin-top: 2vh;
  border: 1px solid black;
  padding: 5px;
}
.user-login-form > button {
  height: 45%;
  width: 50%;
  background: none;
  margin-top: 2vh;
  align-self: center;
  padding: 10px 5px;
  border: 1px solid black;
  font-size: 5vh;
  cursor: pointer;
}
.user-login-form > button:active {
  background-color: black;
  color: white;
}
</style>
