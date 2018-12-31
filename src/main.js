// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'animate.css'
import 'normalize.css'
Vue.use(Vant);

import axios from '@/utils'

import store from '@/store';

import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
import loading from '@/components/loading'

Vue.component('loading',loading)


Vue.use(VueLazyload)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
