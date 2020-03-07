import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import UserHome from '@/components/UserHome'
import Plants from '@/components/Plants'
import Animals from '@/components/Animals'
import Tanks from '@/components/Tanks'
import Navbar from '@/components/Navbar'
import createBuild from '@/components/createBuild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/UserHome',
      name: 'UserHome',
      component: UserHome
    },
    {
      path: '/Plants',
      name: 'Plants',
      component: Plants
    },
    {
      path: '/Animals',
      name: 'Animals',
      component: Animals
    },
    {
      path: '/Navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/Tanks',
      name: 'Tanks',
      component: Tanks
    },
    {
      path: '/CreateBuild',
      name: 'Create Build',
      component: createBuild
    }
  ]
})
