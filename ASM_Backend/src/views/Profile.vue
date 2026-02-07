<template>
  <div class="row justify-content-center">
    <div class="col-lg-9 col-md-11">
      <div class="card shadow mt-4">
        <!-- HEADER -->
        <div class="card-header bg-info text-white">
          <h4 class="mb-0">
            <i class="fa-solid fa-user me-2"></i>
            Thông tin cá nhân
          </h4>
        </div>

        <!-- BODY -->
        <div class="card-body">
          <div class="row">
            <!-- AVATAR -->
            <div class="col-md-4 text-center border-end">
              <img
                :src="avatar"
                class="rounded-circle mb-3"
                style="width: 150px; height: 150px; object-fit: cover"
              />

              <input
                type="file"
                class="form-control mb-2"
                @change="handleAvatar"
              />

              <span class="badge bg-success">Đang hoạt động</span>
            </div>

            <!-- FORM -->
            <div class="col-md-8">
              <form @submit.prevent="updateProfile">
                <!-- Họ tên -->
                <div class="mb-3">
                  <label class="form-label fw-bold">Họ và tên</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="name"
                  />
                </div>

                <!-- Email -->
                <div class="mb-3">
                  <label class="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="email"
                  />
                </div>

                <!-- Mật khẩu -->
                <div class="mb-3">
                  <label class="form-label fw-bold">Mật khẩu mới</label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="password"
                  />
                </div>

                <!-- BUTTON -->
                <div class="text-end">
                  <button type="reset" class="btn btn-secondary me-2">
                    Làm mới
                  </button>
                  <button type="submit" class="btn btn-primary">
                    Cập nhật thông tin
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- FOOTER -->
        <div class="card-footer text-muted text-center">
          Chỉnh sửa thông tin cá nhân
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentUser = JSON.parse(localStorage.getItem('currentUser'))

const name = ref('')
const email = ref('')
const password = ref('')
const avatar = ref('https://via.placeholder.com/150')

onMounted(() => {
  if (!currentUser) {
    alert('Vui lòng đăng nhập')
    router.push('/login')
    return
  }

  name.value = currentUser.name
  email.value = currentUser.email
  avatar.value = currentUser.avatar || avatar.value
})

const handleAvatar = (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    avatar.value = reader.result
  }
  reader.readAsDataURL(file)
}

const updateProfile = () => {
  const users = JSON.parse(localStorage.getItem('users')) || []

  const index = users.findIndex(u => u.id === currentUser.id)
  if (index === -1) return

  users[index].name = name.value
  users[index].email = email.value
  users[index].avatar = avatar.value

  if (password.value) {
    users[index].password = password.value
  }

  localStorage.setItem('users', JSON.stringify(users))
  localStorage.setItem('currentUser', JSON.stringify(users[index]))

  alert('Cập nhật thông tin thành công')
}
</script>
