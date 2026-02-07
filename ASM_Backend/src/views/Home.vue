<template>
  <div>
    <section class="bg-dark text-white py-5 mb-5">
      <div class="container text-center">
        <h1 class="fw-bold mb-3">Tin tức & Công nghệ</h1>
        <p class="lead mb-4">
          Chia sẻ kiến thức lập trình, web & công nghệ mới nhất
        </p>
      </div>
    </section>

    <!-- DANH SÁCH BÀI VIẾT -->
    <div class="container">
      <h3 class="text-center fw-bold mb-4 text-primary">
         Bài Báo 24/7
      </h3>

      <div class="row g-4">
        <div
          class="col-lg-4 col-md-6"
          v-for="post in posts"
          :key="post.id"
        >
          <PostCard :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PostCard from '../components/PostCard.vue'

const posts = ref([])

onMounted(() => {
  posts.value = JSON.parse(localStorage.getItem('posts')) || []
})
</script>

