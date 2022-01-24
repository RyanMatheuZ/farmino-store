import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/products',
		name: 'Products',
		redirect: { name: 'Fruits', params: { name: 'fruits' } },
		component: () => import('../views/Products.vue'),

		children: [
			{
				path: ':name',
				name: 'Fruits',
				component: () => import('../views/Fruits.vue')
			},
			{
				path: ':name',
				name: 'Vegetables',
				component: () => import('../views/Vegetables.vue')

			},
			{
				path: ':name',
				name: 'Greens',
				component: () => import('../views/Greens.vue')

			}
		]
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
	},
	{
		path: '*',
		name: 'Error',
		component: () => import('../views/Error.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router