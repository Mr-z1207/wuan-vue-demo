import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ToDoList from '../views/ToDoList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/toDoList',
    name: 'ToDoList',
    component: ToDoList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
