<template>
  <div class="box">
    <h2>Bài 1: Xếp loại học sinh</h2>

    <input type="number" v-model.number="score" min="0" max="10"
           placeholder="Nhập điểm trung bình" />

    <p v-if="score < 0 || score > 10">Điểm không hợp lệ</p>
    <p v-else-if="score < 5">Xếp loại: Yếu</p>
    <p v-else-if="score < 6.5">Xếp loại: Trung bình</p>
    <p v-else-if="score < 8">Xếp loại: Khá</p>
    <p v-else-if="score < 9">Xếp loại: Giỏi</p>
    <p v-else>Xếp loại: Xuất sắc</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const score = ref(0)
</script>

<style scoped>
.box { padding: 20px; border: 1px solid #ccc; margin-bottom: 20px; }
</style>
