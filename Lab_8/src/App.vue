<script>
export default {
  name: 'App'
}
</script>

<template>
<div>
    <h1>MyBlog</h1>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/profile/info">Profile</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/login">Login</router-link>
    </nav>

    <hr />
    <router-view />
  </div>
</template>

