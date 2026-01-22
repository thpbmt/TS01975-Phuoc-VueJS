<template>
<h3>Danh sách bài viết</h3>
<div class="row">
<div class="col-md-4" v-for="post in posts" :key="post.id">
<PostCard :post="post" />
</div>
</div>
</template>


<script setup>
import PostCard from '../components/PostCard.vue'


const posts = [
{ id: 1, title: 'Bài viết 1', content: 'Nội dung ngắn...' },
{ id: 2, title: 'Bài viết 2', content: 'Nội dung ngắn...' }
]
</script>