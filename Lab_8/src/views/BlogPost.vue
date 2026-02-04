<template>
  <div>
    <h2>Chi tiết bài viết</h2>
    <p><strong>ID bài viết:</strong> {{ id }}</p>
    <p>{{ content }}</p>

    <button @click="goBack">Quay lại</button>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
    content() {
      return "Nội dung bài viết với ID = " + this.id;
    },
  },
  methods: {
    goBack() {
      this.$router.push({ name: "BlogList" });
    },
  },
};
</script>
