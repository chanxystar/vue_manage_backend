import { RouteRecordRaw } from "vue-router"

const routes:RouteRecordRaw[] = [
  {
    path:'/login',
    name:'login',
    component:()=>import("@/views/login/index.vue")
  },
  {
    path:'/',
    name:'layout',
    component:()=>import("@/layouts/index.vue")
  },
]


export default routes