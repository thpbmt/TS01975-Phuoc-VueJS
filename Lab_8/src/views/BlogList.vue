<template>
  <div>
    <h2>Danh sách bài viết</h2>
    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        <router-link :to="{ name: 'BlogPost', params: { id: blog.id }}">
          {{ blog.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        { id: 1, title: "Vue Router cơ bản" },
        { id: 2, title: "Routes động trong Vue" },
        { id: 3, title: "Bảo vệ route với Auth" },
      ],
    };
  },
};
</script>
