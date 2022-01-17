import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import Vuelidate from 'vuelidate'
import './assets/css/style.css'

Vue.use(VueMeta)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')