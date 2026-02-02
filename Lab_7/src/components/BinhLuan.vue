<template>
  <div>
    <h2>Bình luận bài viết</h2>
    <div class="card p-3 mb-3">
      <img :src="imageUrl"   class="img-fluid mx-auto d-block" />
      <h3>8 loại rau củ quả giàu canxi</h3>
      <p>
        Canxi là khoáng chất quan trọng cho xương và răng. Dưới đây là 8 loại rau củ quả giàu canxi giúp bổ sung dưỡng chất cho cơ thể.
      </p>
    </div>

    <!-- Form nhập bình luận -->
    <form @submit.prevent="submitComment">
      <div class="mb-3">
        <textarea class="form-control" v-model="commentText" placeholder="Nhập bình luận của bạn"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Gửi bình luận</button>
    </form>

    <!-- Danh sách bình luận -->
    <div v-if="comments.length" class="mt-4">
      <h4>Danh sách bình luận:</h4>
      <ul style="list-style-type: circle;">
        <li v-for="(comment, index) in comments" :key="index">
          <strong>{{ comment.name }}:</strong> {{ comment.text }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import img1 from '../assets/img1.png';

const imageUrl = img1

import { ref } from 'vue';
const props = defineProps(['username']);

const commentText = ref('');

// Mảng chứa các bình luận đã gửi
const comments = ref([]);

// Xử lý gửi bình luận
function submitComment() {
  if (commentText.value) {
    // Thêm bình luận mới vào mảng comments
    comments.value.push({
      name: props.username,  // Sử dụng tên từ props
      text: commentText.value
    });

    // Xóa dữ liệu trong form sau khi gửi
    commentText.value = '';
  }
}
</script>