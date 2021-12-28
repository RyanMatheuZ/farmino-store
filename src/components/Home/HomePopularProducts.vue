<template>
	<section class="m-5">
		<h2 class="text-black-100 text-center font-semibold text-4xl">
			Produtos em Alta
		</h2>

		<ProductsCard :products="homeProducts" />
	</section>
</template>

<script>
const ProductsCard = () => import('../ProductsCard')

export default {
	name: 'HomePopularProducts',

	components: {
		ProductsCard
	},

	data() {
		return {
			homeProducts: [
				{
					id: 4761,
					name: 'Cenoura',
					family: 'Apiaceae',
					price: '2,50',
					img: 'carrot-image.png'
				},
				{
					id: 8074,
					name: 'Kiwi',
					family: 'Actinidiaceae',
					price: '13,45',
					img: 'kiwi-image.png'
				},
				{
					id: 9457,
					name: 'Pimenta',
					family: 'Solanaceae',
					price: '8,25',
					img: 'pepper-image.png'
				},
				{
					id: 3198,
					name: 'Brócolis',
					family: 'Brassicaceae',
					price: '4,70',
					img: 'broccoli-image.png'
				},
				{
					id: 6234,
					name: 'Coco',
					family: 'Arecaceae',
					price: '3,65',
					img: 'coconut-image.png'
				}
			]
		}
	}
}
</script>