<template>
	<section>
		<div class="container mx-auto">
			<section class="p-6 md:p-0">
				<article v-if="!productsInCart.length">
					<CartNoItems />
				</article>

				<article v-else>
					<CartWithItems />
				</article>
			</section>
		</div>
	</section>
</template>

<script>
import { mapState } from 'vuex'

const CartNoItems = () => import('./CartNoItems.vue')
const CartWithItems = () => import('./CartWithItems.vue')

export default {
	name: 'CartItems',

	components: {
		CartNoItems,
		CartWithItems
	},

	computed: {
		...mapState({
			productsInCart: state => state.productsInCart
		})
	}
}
</script>