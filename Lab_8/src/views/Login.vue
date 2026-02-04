<template>
  <div>
    <h2>Đăng nhập</h2>
    <button @click="login">Đăng nhập</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      localStorage.setItem("auth", "true"); // ✅ GIẢ LẬP LOGIN
      this.$router.push({ name: "Dashboard" });
    },
  },
};
</script>

