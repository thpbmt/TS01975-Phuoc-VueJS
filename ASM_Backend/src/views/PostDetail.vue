<template>
<h3>{{ post.title }}</h3>
<p>{{ post.content }}</p>


<hr />
<h5>Bình luận</h5>


<CommentItem v-for="c in comments" :key="c.id" :comment="c" />


<form class="mt-3">
<textarea class="form-control" placeholder="Nhập bình luận..."></textarea>
<button class="btn btn-success mt-2">Gửi</button>
</form>
</template>


<script setup>
import CommentItem from '../components/CommentItem.vue'


const post = { title: 'Bài viết demo', content: 'Nội dung chi tiết...' }


const comments = [
{ id: 1, user: 'An', content: 'Hay quá!' },
{ id: 2, user: 'Bình', content: 'Bài viết tốt' }
]
</script>