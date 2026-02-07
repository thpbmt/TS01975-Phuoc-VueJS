<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = computed(() => JSON.parse(localStorage.getItem('currentUser')))
const logout = () => {
  localStorage.removeItem('currentUser')
  router.push('/login')
}
</script>

<template>
    <Navbar />
    
<div class="container mt-4">
<router-view />
</div>
<Footer />
</template>

<style scoped>

</style>
