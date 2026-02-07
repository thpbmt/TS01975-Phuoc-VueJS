<template>
  <div class="card h-100 shadow-sm">
    <div class="card-body d-flex flex-column">
      <!-- TIÊU ĐỀ -->
      <h5 class="card-title text-primary">
        {{ post.title }}
      </h5>

      <!-- NỘI DUNG RÚT GỌN -->
      <p class="card-text text-muted">
        {{ shortContent }}
      </p>

      <!-- THÔNG TIN -->
      <small class="text-muted mb-2">
        Tác giả: {{ post.author }} • {{ post.createdAt }}
      </small>

      <!-- BUTTON -->
      <router-link
        :to="`/post/${post.id}`"
        class="btn btn-outline-primary btn-sm mt-auto"
      >
        Xem chi tiết
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  post: Object
})

const shortContent = computed(() => {
  if (!props.post.content) return ''
  return props.post.content.length > 100
    ? props.post.content.substring(0, 100) + '...'
    : props.post.content
})
</script>
