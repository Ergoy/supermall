import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=() => import ('../views/home/Home');
const Category = () => import('../views/category/Category');
const Cart = () => import('../views/cart/Cart');
const Profile = () => import('../views/profile/Profile');

Vue.use(VueRouter);

const routes=[
  {
    path: '',
    redirect:"/home",
    meta:{
      title:'首页'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/category',
    component: Category,
    meta:{
      title:'目录'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta:{
      title:'购物车'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]
const router=new VueRouter({
  routes
})

export default router
