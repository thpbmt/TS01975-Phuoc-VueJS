
<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container">
      <!-- LOGO -->
      <router-link class="navbar-brand" to="/">
        <!-- <img :src="logo" alt="Logo" style="width: 150px" /> -->
      </router-link>

      <!-- TOGGLER -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- MENU -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <i class="fa-solid fa-list"></i> Bài viết
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/video">
              <i class="fa-solid fa-film"></i> Video
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/about">
              <i class="fa-solid fa-circle-info"></i> Giới thiệu
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/event">
              <i class="fa-solid fa-calendar-days"></i> Sự kiện
            </router-link>
          </li>

          <!-- DROPDOWN TÀI KHOẢN -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              <i class="fa-solid fa-user"></i> Tài khoản
            </a>

            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/login">
                  Đăng nhập
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/forgot-password">
                  Quên mật khẩu
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/register">
                  Đăng ký thành viên
                </router-link>
              </li>
            </ul>
          </li>
        </ul>

        <!-- NGÔN NGỮ -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Tiếng Việt</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Tiếng Anh</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>
