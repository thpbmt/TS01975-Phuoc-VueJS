<template>
  <div class="container mt-4">
    <!-- BÀI VIẾT -->
    <h3>{{ post.title }}</h3>
    <img v-if="post.image" :src="post.image" class="img-fluid mb-3" style="max-width: 100%; max-height: 400px;" />
    <p>{{ post.content }}</p>
    <small class="text-muted">
      Tác giả: {{ post.author }} • {{ post.createdAt }}
    </small>
<div class="mt-2" v-if="user && user.name === post.author">
  <button class="btn btn-danger btn-sm me-2" @click="deletePost">
    Xóa bài
  </button>
  <router-link
    :to="`/edit-post/${post.id}`"
    class="btn btn-warning btn-sm"
  >
    Sửa bài
  </router-link>
</div>
    <hr />

    <!-- BÌNH LUẬN -->
    <h5>Bình luận</h5>

    <CommentItem
      v-for="c in comments"
      :key="c.id"
      :comment="c"
    />

    <!-- FORM BÌNH LUẬN -->
    <form class="mt-3" @submit.prevent="addComment">
      <textarea
        class="form-control"
        placeholder="Nhập bình luận..."
        v-model="newComment"
      ></textarea>

      <button class="btn btn-success mt-2">
        Gửi
      </button>
    </form>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CommentItem from '../components/CommentItem.vue'

const route = useRoute()
const router = useRouter()

const post = ref({})
const comments = ref([])
const newComment = ref('')

const user = JSON.parse(localStorage.getItem('currentUser'))

onMounted(() => {
  const posts = JSON.parse(localStorage.getItem('posts')) || []
  post.value = posts.find(p => p.id == route.params.id)

  if (!post.value) {
    router.push('/')
    return
  }

  const allComments = JSON.parse(localStorage.getItem('comments')) || []
  comments.value = allComments.filter(c => c.postId == post.value.id)
})

const addComment = () => {
  if (!user) {
    alert('Vui lòng đăng nhập để bình luận')
    router.push('/login')
    return
  }

  if (!newComment.value.trim()) return

  const allComments = JSON.parse(localStorage.getItem('comments')) || []

  const comment = {
    id: Date.now(),
    postId: post.value.id,
    user: user.name,
    content: newComment.value,
    createdAt: new Date().toLocaleString()
  }

  allComments.push(comment)
  localStorage.setItem('comments', JSON.stringify(allComments))

  comments.value.push(comment)
  newComment.value = ''
}
const deletePost = () => {
  if (!confirm('Bạn có chắc muốn xóa bài viết này?')) return

  // Xóa bài viết
  let posts = JSON.parse(localStorage.getItem('posts')) || []
  posts = posts.filter(p => p.id !== post.value.id)
  localStorage.setItem('posts', JSON.stringify(posts))

  // Xóa comment của bài
  let allComments = JSON.parse(localStorage.getItem('comments')) || []
  allComments = allComments.filter(c => c.postId !== post.value.id)
  localStorage.setItem('comments', JSON.stringify(allComments))

  alert('Đã xóa bài viết')
  router.push('/')
}

</script>
