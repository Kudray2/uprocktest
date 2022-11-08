<template>
  <div class="user-indicator">
    <p>Current User: {{}}</p>
    <p class="not-logged-in" v-if="!userName > Guest"></p>
    <p class="logged-in">{{ userName }}</p>
  </div>
</template>

<script>
export default {
  props: {
    userName: { type: String, required: false },
  },
};
</script>
<style scoped>
.user-indicator {
  display: flex;
  flex-direction: column;
}
.logged-in {
  color: greenyellow;
}
.not-logged-in {
  color: red;
}
</style>
