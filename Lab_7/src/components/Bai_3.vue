<template>
    <div class="container p-5">
        <div class="row">

            <!-- CỘT TRÁI: FORM ĐĂNG KÝ -->
            <div class="col-sm-6">
                <h3>Form Đăng ký</h3>

                <form @submit.prevent="register">
                    <div class="mb-3">
                        <label>Họ tên:</label>
                        <input type="text" class="form-control" v-model="fullName">
                    </div>

                    <div class="mb-3">
                        <label>Email:</label>
                        <input type="email" class="form-control" v-model="email">
                    </div>

                    <div class="mb-3">
                        <label>Mật khẩu:</label>
                        <input type="password" class="form-control" v-model="password">
                    </div>

                    <div class="mb-3">
                        <label>Ngày sinh:</label>
                        <input type="date" class="form-control" v-model="birthday">
                    </div>

                    <div class="mb-3">
                        <label>Giới tính:</label><br>
                        <input type="radio" value="Nam" v-model="gender"> Nam
                        <input type="radio" value="Nữ" v-model="gender" class="ms-3"> Nữ
                        <input type="radio" value="Khác" v-model="gender" class="ms-3"> Khác
                    </div>

                    <div class="mb-3">
                        <label>Ngôn ngữ:</label><br>
                        <input type="checkbox" value="Tiếng Việt" v-model="languages"> Tiếng Việt
                        <input type="checkbox" value="English" v-model="languages"> Tiếng Anh
                        <input type="checkbox" value="Japanese" v-model="languages"> Tiếng Nhật
                    </div>

                    <button type="submit" class="btn btn-primary">
                        Đăng ký
                    </button>
                </form>
            </div>

            <!-- CỘT PHẢI: THÔNG TIN ĐÃ ĐĂNG KÝ -->
            <div class="col-sm-6" v-if="isRegistered">
                <h3>Thông tin đã đăng ký</h3>
                <p><b>Họ tên:</b> {{ fullName }}</p>
                <p><b>Email:</b> {{ email }}</p>
                <p><b>Ngày sinh:</b> {{ birthday }}</p>
                <p><b>Giới tính:</b> {{ gender }}</p>
                <p><b>Ngôn ngữ:</b> {{ languages.join(', ') }}</p>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const fullName = ref('')
const email = ref('')
const password = ref('')
const birthday = ref('')
const gender = ref('')
const languages = ref([])   // checkbox → mảng
const isRegistered = ref(false)

const register = () => {
    isRegistered.value = true
}
</script>
