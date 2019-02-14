import Vue from 'vue'
import App from './App.vue'
import vueSmoothScroll from 'vue-smooth-scroll'


Vue.config.productionTip = false

require("./assets/main.scss")

Vue.use(vueSmoothScroll)


new Vue({
  render: h => h(App),
}).$mount('#app')

