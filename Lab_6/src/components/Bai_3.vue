<template>
  <div class="container mt-5">
    <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>

    <div class="row">
      <!-- DÙNG v-for THAY VÌ items[0], items[1], items[2] -->
      <div
        class="col-sm-4 mb-4"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="card">
          <img :src="item.image" class="img-fluid" alt="Hình ảnh" />

          <div class="card-body text-start">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-text">{{ item.content }}</p>
            <button class="btn btn-info">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import hình ảnh từ thư mục assets
import img1 from '../assets/images/banner1.jpg'
import img2 from '../assets/images/banner2.jpg'
import img3 from '../assets/images/banner3.jpg'

// DỮ LIỆU BÀI VIẾT
const items = [
  {
    title: '8 loại rau củ quả giàu canxi',
    content:
      'Canxi là khoáng chất thiết yếu giúp xương chắc khỏe. Có thể bổ sung qua thực phẩm như cải xoăn, bông cải xanh, cam, và đậu nành.',
    image: img1
  },
  {
    title: 'Các loại gia vị tốt cho sức khỏe',
    content:
      'Một số loại gia vị như nghệ, gừng, tỏi chứa polyphenol giúp chống oxy hóa, tăng hương vị và hỗ trợ sức khỏe tim mạch.',
    image: img2
  },
  {
    title: '9 loại đậu bổ dưỡng nên dùng nhiều',
    content:
      'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan... giàu protein, vitamin và khoáng chất, giúp giảm mỡ máu và tốt cho tim.',
    image: img3
  }
]
</script>

<style scoped>
.card-body {
  text-align: left;
}
</style>
