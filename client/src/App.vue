<template>
  <header>
    <p>Uprock Test App</p>
    <UserIndicator v-bind:userName="currentUser?.userName" />
  </header>
  <main>
    <div v-if="!currentUser?.userName">
      <h2>Login</h2>
      <h2 class="error" v-if="isError">
        The email address or password is incorrect.
      </h2>
      <div class="user-logn-form-container">
        <UserLoginForm @userToLogin="fetchUser" />
      </div>
      <article>
        <title>Valid logins</title>
        <h3>Valid logins:</h3>
        <ul>
          <li>user1@users.com pass: user1</li>
          <li>user2@users.com pass: user2</li>
          <li>user3@users.com pass: user3</li>
          <li>user4@users.com pass: user4</li>
        </ul>
      </article>
    </div>

    <div v-if="currentUser?.userName">
      <UserDetails v-bind:currentUser="currentUser" @cleanUser="cleanUser" />
    </div>
  </main>
</template>
<script>
import UserLoginForm from "./components/UserLoginForm.vue";
import UserIndicator from "./components/UserIndicator.vue";
import UserDetails from "./components/UserDetails.vue";
export default {
  defaultUser: {
    id: null,
    userEmail: "",
    userPassword: "user1",
    userName: "",
    userLastName: "",
    userPosts: 0,
  },
  components: {
    UserLoginForm,
    UserIndicator,
    UserDetails,
  },
  mounted() {
    const userFromStorage = localStorage.getItem("currentUser");
    this.currentUser = JSON.parse(userFromStorage);
  },
  data() {
    return {
      // currentUser: {
      //   id: null,
      //   userEmail: "",
      //   userPassword: "user1",
      //   userName: "",
      //   userLastName: "",
      //   userPosts: 0,
      // },
      currentUser: { ...this.defaultUser },
      isError: false,
    };
  },
  methods: {
    getUserFromStorage() {
      localStorage.getItem("currentUser")
        ? (this.currentUser = JSON.parse(localStorage.getItem("currentUser")))
        : this.currentUser;
    },
    makeUserToLogin(userfromChild) {
      console.log("app", userfromChild);
    },
    async fetchUser(userToLogin) {
      try {
        const response = await fetch("http://localhost:7000/login", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userToLogin),
        });
        const userLoggedIn = await response.json();
        console.log(userLoggedIn);
        localStorage.setItem("currentUser", JSON.stringify(userLoggedIn));
        this.currentUser = userLoggedIn;
      } catch (err) {
        this.isError = true;
      }
    },
    async cleanUser() {
      await localStorage.removeItem("currentUser");
      this.currentUser = {};
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  background-color: black;
  color: grey;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5vh;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 5vw;
  padding-top: 5vh;
}
article {
  margin-top: 2vh;
}
.error {
  color: red;
}
</style>
