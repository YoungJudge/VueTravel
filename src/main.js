// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import 'styles/css/reset.css'
import 'styles/css/border.css'
import 'styles/css/iconfont.css'
FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})