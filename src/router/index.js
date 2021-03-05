import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SinglePost from '../views/SinglePost.vue'
import NewPost from '../views/NewPost.vue'
import Tag from '../views/Tag.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'SinglePost',
    component: SinglePost,
    props: true
  },
  {
    path: '/new',
    name: 'NewPost',
    component: NewPost
  },
  {
    path: '/tags/:tag',
    name: 'Tag',
    component: Tag
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
