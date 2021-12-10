<template>
	<main>
		<HomeHero />

		<HomeProductsAdvantages />
	</main>
</template>

<script>
const HomeHero = () => import('../components/Home/HomeHero')
const HomeProductsAdvantages = () => import('../components/Home/HomeProductsAdvantages')

export default {
	name: 'Home',

	components: {
		HomeHero,
		HomeProductsAdvantages
	},

	metaInfo: {
		title: 'Farmino | Início',

		meta: [
			{
				name: 'description',
				content: 'A Farmino é pra qualquer fome. Peça onde estiver. Os melhores alimentos estão aqui!'
			}
		]
	}
}
</script>