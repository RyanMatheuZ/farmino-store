<template>
	<main>
		<AboutHero />

		<AboutTestimonials />
	</main>
</template>

<script>
const AboutHero = () => import('../components/About/AboutHero')
const AboutTestimonials = () => import('../components/About/AboutTestimonials')

export default {
	name: 'About',

	components: {
		AboutHero,
		AboutTestimonials
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