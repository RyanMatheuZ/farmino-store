<template>
	<main>
		<CartHero />

		<CartItems />
	</main>
</template>

<script>
const CartHero = () => import('../components/Cart/CartHero')
const CartItems = () => import('../components/Cart/CartItems')

export default {
	name: 'ProductCart',

	components: {
		CartHero,
		CartItems
	},

	metaInfo: {
		title: 'Farmino | Carrinho de Produtos',

		meta: [
			{
				name: 'description',
				content: 'Todas essas são suas compras. Faça um bom proveito!'
			}
		]
	}
}
</script>