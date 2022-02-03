import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		productsInCart: []
	},

	mutations: {
		ADD_TO_CART(state, payload) {
			state.productsInCart.push(payload)
		}
	},

	actions: {
	},

	modules: {
	}
})