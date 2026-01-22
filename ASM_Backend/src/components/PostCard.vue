<template>
<div class="card mb-3">
<div class="card-body">
<h5 class="card-title">{{ post.title }}</h5>
<p class="card-text">{{ post.content }}</p>
<router-link :to="'/post/' + post.id" class="btn btn-primary btn-sm">Xem chi tiết</router-link>
</div>
</div>
</template>


<script setup>
defineProps({ post: Object })
</script>