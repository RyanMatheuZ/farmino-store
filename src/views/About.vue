<template>
	<main>
		<AboutHero />
	</main>
</template>

<script>
const AboutHero = () => import('../components/About/AboutHero')

export default {
	name: 'About',

	components: {
		AboutHero
	},

	metaInfo: {
		title: 'Farmino | Sobre',

		meta: [
			{
				name: 'description',
				content: 'Conheça a história da Farmino, um exemplo de superação!'
			}
		]
	}
}
</script>