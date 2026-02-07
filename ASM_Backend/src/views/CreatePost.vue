<template>
  <div class="row justify-content-center">
    <div class="col-lg-8 col-md-10">
      <div class="card shadow mt-4">
        <!-- HEADER -->
        <div class="card-header bg-primary text-white">
          <h4 class="mb-0">
            <i class="fa-solid fa-pen-to-square me-2"></i>
            Đăng bài viết mới
          </h4>
        </div>

        <!-- BODY -->
        <div class="card-body">
          <form>
            <!-- Tiêu đề -->
            <div class="mb-3">
              <label class="form-label fw-bold">Tiêu đề bài viết</label>
              <input
                type="text"
                class="form-control"
                placeholder="Nhập tiêu đề bài viết"
                v-model="title"
              />
            </div>


            <!-- Hình ảnh -->
            <div class="mb-3">
              <label class="form-label fw-bold">Hình ảnh</label>
              <input type="file" class="form-control" accept="image/*" @change="handleImage" />
              <img v-if="imagePreview" :src="imagePreview" class="img-fluid mt-2" style="max-height: 300px;" />
            </div>

            <!-- Nội dung -->
            <div class="mb-3">
              <label class="form-label fw-bold">Nội dung bài viết</label>
              <textarea
                class="form-control"
                rows="6"
                placeholder="Nhập nội dung bài viết..."
                v-model="content"
              ></textarea>
            </div>

          

            <!-- BUTTON -->
            <div class="text-end">
              <button type="button" class="btn btn-success" @click="addPost">
                Đăng bài
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = JSON.parse(localStorage.getItem('currentUser'))

const title = ref('')
const content = ref('')
const category = ref('')
const status = ref('public')
const imagePreview = ref('')
const imageData = ref('')

const handleImage = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      imagePreview.value = e.target.result
      imageData.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

onMounted(() => {
  if (!user) {
    alert('Vui lòng đăng nhập')
    router.push('/login')
  }
})

const addPost = () => {
  if (!title.value || !content.value) {
    alert('Vui lòng nhập đầy đủ thông tin')
    return
  }

  const posts = JSON.parse(localStorage.getItem('posts')) || []

  posts.unshift({
    id: Date.now(),
    title: title.value,
    content: content.value,
    category: category.value,
    status: status.value,
    author: user.name,
    image: imageData.value,
    createdAt: new Date().toLocaleString()
  })

  localStorage.setItem('posts', JSON.stringify(posts))
  router.push('/')
}
</script>

