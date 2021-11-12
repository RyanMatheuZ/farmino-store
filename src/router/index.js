import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/products',
		name: 'Products',
		component: () => import('../views/Products.vue')
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () => import('../views/Contact.vue')
	},
	{
		path: '/product-cart',
		name: 'ProductCart',
		component: () => import('../views/ProductCart.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router