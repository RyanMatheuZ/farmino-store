<template>
	<main>
		<ProductsHero />

		<ProductsNavBar />

		<Fruits />

		<Vegetables />

		<Greens />
	</main>
</template>

<script>
const ProductsHero = () => import('../components/Products/ProductsHero')
const ProductsNavBar = () => import('../components/Products/ProductsNavBar')
const Fruits = () => import('./Fruits')
const Vegetables = () => import('./Vegetables')
const Greens = () => import('./Greens')

export default {
	name: 'Product',

	components: {
		ProductsHero,
		ProductsNavBar,
		Fruits,
		Vegetables,
		Greens
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