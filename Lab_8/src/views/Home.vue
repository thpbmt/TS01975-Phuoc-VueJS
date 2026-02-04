<template>
  <div>
    <h2>Trang chủ</h2>
    <p>Chào mừng bạn đến với MyBlog 🚀</p>

    <button @click="goToBlog">Xem Blog</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToBlog() {
      this.$router.push({ name: "BlogList" });
    },
  },
};
</script>
