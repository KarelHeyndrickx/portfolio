import Vue from 'vue'
import App from './App.vue'
import vueSmoothScroll from 'vue-smooth-scroll'
import VeeValidate from 'vee-validate'
import  AOS from 'aos'
import 'aos/dist/aos.css'
import titleMixin from './mixins/titleMixin'

Vue.mixin(titleMixin)

Vue.use(VeeValidate)
Vue.config.productionTip = false

require("./assets/main.scss")

Vue.use(vueSmoothScroll)


new Vue({
  render: h => h(App),
  created(){
    AOS.init();
  }
}).$mount('#app')

