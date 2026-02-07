<template>
  <div class="border rounded p-2 mb-2">
    <strong>{{ comment.user }}</strong>
    <small class="text-muted ms-2">{{ comment.createdAt }}</small>
    <p class="mb-0">{{ comment.content }}</p>
  </div>
</template>

<script setup>
defineProps({
  comment: Object
})
</script>
