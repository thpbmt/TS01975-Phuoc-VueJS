<template>
  <div class="row justify-content-center">
    <div class="col-md-6 col-lg-5">
      <div class="card shadow mt-4">
        <div class="card-header bg-dark text-white text-center">
          <h4 class="mb-0">Đăng ký tài khoản</h4>
        </div>

        <div class="card-body">
          <form @submit.prevent="register">
            <!-- Họ tên -->
            <div class="mb-3">
              <label class="form-label">Họ và tên</label>
              <input
                type="text"
                class="form-control"
                placeholder="Nhập họ và tên"
                v-model="name"
              />
            </div>

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

            <!-- Xác nhận mật khẩu -->
            <div class="mb-3">
              <label class="form-label">Xác nhận mật khẩu</label>
              <input
                type="password"
                class="form-control"
                placeholder="Nhập lại mật khẩu"
                 v-model="confirmPassword"
              />
            </div>

            <!-- Giới tính -->
            <div class="mb-3">
              <label class="form-label">Giới tính</label>
              <select class="form-select" v-model="gender">
                <option>Nam</option>
                <option>Nữ</option>
                <option>Khác</option>
              </select>
            </div>

           

            <!-- Button -->
            <button type="submit" class="btn btn-success w-100">
              Đăng ký
            </button>
          </form>
        </div>

        <div class="card-footer text-center">
          <small>
            Đã có tài khoản?
            <span class="text-primary" @click="goLogin">Đăng nhập</span>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const gender = ref("");

const router = useRouter();

const register = () => {
  if (!name.value || !email.value || !password.value) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert("Mật khẩu xác nhận không khớp");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.some((u) => u.email === email.value);
  if (exists) {
    alert("Email đã tồn tại");
    return;
  }

  users.push({
    id: Date.now(),
    name: name.value,
    email: email.value,
    password: password.value,
    gender: gender.value,
  });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng ký thành công!");
  router.push({ name: "Login" });
};

const goLogin = () => {
  router.push({ name: "Login" });
};
</script>


