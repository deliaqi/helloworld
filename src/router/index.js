import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Course from '@/views/Course'
import News from '@/views/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/course',
      name: 'Course',
      component: Course,
    }, {
      path: '/news',
      name: 'News',
      component: News,
    },
  ]
})
