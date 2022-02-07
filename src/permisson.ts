import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Route } from 'vue-router'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login']

router.beforeEach((to: Route, _: Route, next: any) => {
  NProgress.start()

  if (whiteList.includes(to.path)) {
    next()
  } else {
    next({ path: '/login' })
  }
  NProgress.done()
})

router.afterEach(() => {
  NProgress.done()
})