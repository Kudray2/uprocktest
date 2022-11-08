<template>
  <h1>Hi, {{ currentUser.userName }}</h1>
  <h2>User data:</h2>
  <p>id: {{ currentUser.id }}</p>
  <p>e-mail: {{ currentUser.userEmail }}</p>
  <p>First name: {{ currentUser.userName }}</p>
  <p>Last name: {{ currentUser.userLastName }}</p>
  <p>Total posts: {{ currentUser.userPosts }}</p>
  <button @click="handleClean">Log Out</button>
</template>
<script>
export default {
  props: {
    currentUser: {
      id: { type: Number },
      userEmail: { type: String },
      userPassword: { type: String },
      userName: { type: String },
      userLastName: { type: String },
      userPosts: { type: Number },
    },
  },
  methods: {
    handleClean() {
      this.$emit("cleanUser");
    },
  },
};
</script>
<style scoped>
p {
  font-size: 3vh;
}
h1 {
  margin-top: 3vh;
  margin-bottom: 3vh;
}
button {
  height: 45%;
  background: none;
  margin-top: 2vh;
  align-self: center;
  padding: 10px;
  border: 1px solid black;
  font-size: 5vh;
  cursor: pointer;
}
</style>
