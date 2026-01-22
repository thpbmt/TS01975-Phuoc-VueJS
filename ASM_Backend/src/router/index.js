import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import CreatePost from '../views/CreatePost.vue'
import PostDetail from '../views/PostDetail.vue'
import Profile from '../views/Profile.vue'


const routes = [
{ path: '/', component: Home },
{ path: '/login', component: Login },
{ path: '/register', component: Register },
{ path: '/create-post', component: CreatePost },
{ path: '/post/:id', component: PostDetail },
{ path: '/profile', component: Profile },


]


export default createRouter({
history: createWebHistory(),
routes
})