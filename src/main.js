/* eslint-enable */
import 'babel-polyfill'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { sync } from 'vuex-router-sync'
import store from './store'

import { localize } from 'vee-validate'
// eslint-disable-next-line no-unused-vars
import ValidateTpl from '@/service/ValidateTpl'

import VueMeta from 'vue-meta'

import VueGtag from '@/service/gtag'

// sync(store, router)
// import { Helper } from './util'

Vue.use(VueGtag, {
  router,
  id: process.env.TRACKING_ID,
  debug: true
})
const gtag = new VueGtag()

router.beforeEach((to, from, next) => {
  if (store.getters.initialized) {
    // console.log('initialized')
    next()
  } else {
    store.dispatch('setInitialized', {
      type: true
    }).then(() => {
      next()
    })
  }
})

// ここ未対応
localize('jp')

Vue.use(VueMeta)

/* eslint-disable no-new */

const application = new Vue({
  store,
  router,
  gtag,
  render: h => h(App)
})

document.addEventListener('DOMContentLoaded', function () {
  application.$mount('#app')
})
