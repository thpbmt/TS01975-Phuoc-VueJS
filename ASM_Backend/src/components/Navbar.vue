<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container">
      <!-- LOGO -->
      <router-link class="navbar-brand" to="/">
        NewsApp
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <!-- MENU TRÁI -->
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <i class="fa-solid fa-list"></i> Bài viết
            </router-link>
          </li>

          <!-- CHỈ HIỆN KHI ĐÃ ĐĂNG NHẬP -->
          <li class="nav-item" v-if="user">
            <router-link class="nav-link" to="/create">
              <i class="fa-solid fa-pen"></i> Đăng bài
            </router-link>
          </li>
        </ul>

        <!-- MENU PHẢI -->
        <ul class="navbar-nav">
          <!-- CHƯA ĐĂNG NHẬP -->
          <template v-if="!user">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">
                Đăng nhập
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">
                Đăng ký
              </router-link>
            </li>
          </template>

          <!-- ĐÃ ĐĂNG NHẬP -->
          <li class="nav-item dropdown" v-else>
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              <i class="fa-solid fa-user"></i> {{ user.name }}
            </a>

            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <router-link class="dropdown-item" to="/profile">
                  Trang cá nhân
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/create">
                  Đăng bài viết
                </router-link>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <button class="dropdown-item text-danger" @click="logout">
                  Đăng xuất
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref(null)

onMounted(() => {
  user.value = JSON.parse(localStorage.getItem('currentUser'))
})

const logout = () => {
  localStorage.removeItem('currentUser')
  user.value = null
  router.push('/login')
}
</script>
