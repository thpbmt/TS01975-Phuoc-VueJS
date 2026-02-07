<template>
  <div class="container mt-4">
    <div class="card shadow">
      <div class="card-header bg-warning">
        <h4>Sửa bài viết</h4>
      </div>

      <div class="card-body">
        <div class="mb-3">
          <label class="form-label">Tiêu đề</label>
          <input v-model="title" class="form-control" />
        </div>

        <div class="mb-3">
          <label class="form-label">Hình ảnh</label>
          <input type="file" class="form-control" @change="handleImage" />
          <img
            v-if="imagePreview"
            :src="imagePreview"
            class="img-fluid mt-2"
            style="max-height: 300px"
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Nội dung</label>
          <textarea v-model="content" class="form-control" rows="6"></textarea>
        </div>

        <button class="btn btn-success" @click="updatePost">
          Lưu thay đổi
        </button>
        <router-link to="/" class="btn btn-secondary ms-2">
          Hủy
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const title = ref('')
const content = ref('')
const imagePreview = ref('')
const imageData = ref('')

let postId = null

onMounted(() => {
  const posts = JSON.parse(localStorage.getItem('posts')) || []
  const post = posts.find(p => p.id == route.params.id)

  if (!post) {
    router.push('/')
    return
  }

  postId = post.id
  title.value = post.title
  content.value = post.content
  imagePreview.value = post.image
  imageData.value = post.image
})

const handleImage = (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (ev) => {
    imagePreview.value = ev.target.result
    imageData.value = ev.target.result
  }
  reader.readAsDataURL(file)
}

const updatePost = () => {
  let posts = JSON.parse(localStorage.getItem('posts')) || []

  const index = posts.findIndex(p => p.id === postId)
  posts[index] = {
    ...posts[index],
    title: title.value,
    content: content.value,
    image: imageData.value,
    updatedAt: new Date().toLocaleString()
  }

  localStorage.setItem('posts', JSON.stringify(posts))
  alert('Cập nhật bài viết thành công')
  router.push(`/post/${postId}`)
}
</script>
