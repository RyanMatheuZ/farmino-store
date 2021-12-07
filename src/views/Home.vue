<template>
	<main>
		<HomeHero />

		<br><br><br><br><br><br><br><br><br><br>
	</main>
</template>

<script>
const HomeHero = () => import('../components/Home/HomeHero')

export default {
	name: 'Home',

	components: {
		HomeHero
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