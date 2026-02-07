<template>
  <div class="row justify-content-center">
    <div class="col-md-6 col-lg-5">
      <div class="card shadow mt-5">
        <!-- HEADER -->
        <div class="card-header bg-dark text-white text-center">
          <h4 class="mb-0">Đăng nhập</h4>
        </div>

        <!-- BODY -->
        <div class="card-body">
          <form @submit.prevent="login">
            <!-- Email -->
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Nhập email"
                v-model="email"
              />
            </div>

            <!-- Mật khẩu -->
            <div class="mb-3">
              <label class="form-label">Mật khẩu</label>
              <input
                type="password"
                class="form-control"
                placeholder="Nhập mật khẩu"
                v-model="password"
              />
            </div>

            <!-- Ghi nhớ -->
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label">
                Ghi nhớ đăng nhập
              </label>
            </div>

            <!-- Button -->
            <button type="submit" class="btn btn-primary w-100">
              Đăng nhập
            </button>
          </form>
        </div>

        <!-- FOOTER -->
        <div class="card-footer text-center">
          <small class="d-block">
            Quên mật khẩu?
            <span class="text-danger">Khôi phục</span>
          </small>
          <small>
            Chưa có tài khoản?
            <span class="text-success">Đăng ký</span>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const login = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => u.email === email.value && u.password === password.value
  );

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    router.push({ name: "Home" });
  } else {
    alert("Sai email hoặc mật khẩu");
  }
};
</script>
