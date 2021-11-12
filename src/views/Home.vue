<template>
	<main>

	</main>
</template>

<script>
const Offers = () => import('../components/Offers')

export default {
	name: 'Home',

	components: {
		Offers
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