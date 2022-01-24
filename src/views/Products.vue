<template>
	<main>
		<ProductsHero />

		<ProductsNavBar />

		<RouterView />
	</main>
</template>

<script>
const ProductsHero = () => import('../components/Products/ProductsHero')
const ProductsNavBar = () => import('../components/Products/ProductsNavBar')

export default {
	name: 'Product',

	components: {
		ProductsHero,
		ProductsNavBar
	},

	metaInfo: {
		title: 'Farmino | Produtos',

		meta: [
			{
				name: 'description',
				content: 'Confira aqui, nossa grande variedade de produtos totalmente saudáveis e de muita qualidade!'
			}
		]
	}
}
</script>