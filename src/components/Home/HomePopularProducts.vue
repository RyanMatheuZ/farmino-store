<template>
	<section class="m-5">
		<h2 class="text-black-100 text-center font-semibold text-4xl">
			Produtos em Alta
		</h2>

		<ProductsCard :products="homeProducts" />
	</section>
</template>

<script>
const ProductsCard = () => import('../Products/ProductsCard')

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
					img: 'carrot-image.png',
					rating: '4,0',
					description: 'A cenoura é uma raiz rica em vitamina A, além de conter sais minerais como fósforo, cloro, potássio, cálcio, sódio; carboidratos, vitaminas do complexo B e betacaroteno.'
				},
				{
					id: 8074,
					name: 'Kiwi',
					family: 'Actinidiaceae',
					price: '13,45',
					img: 'kiwi-image.png',
					rating: '3,9',
					description: 'O kiwi é o fruto de algumas espécies do gênero Actinidia e seus híbridos. O mesmo é originário do sul da China, tendo inclusive sido declarado o Fruto Nacional daquele país.'
				},
				{
					id: 9457,
					name: 'Pimenta',
					family: 'Solanaceae',
					price: '8,25',
					img: 'pepper-image.png',
					rating: '5,0',
					description: 'A pimenta pertence ao gênero Capsicum. Ao longo dos anos as plantas foram sendo domesticadas e sua cor, sabor tamanho e forma foram se modificando pela seleção humana.'
				},
				{
					id: 3198,
					name: 'Brócolis',
					family: 'Brassicaceae',
					price: '4,70',
					img: 'broccoli-image.png',
					rating: '4,3',
					description: 'O brócolis é uma variedade de Brassica oleracea e é uma planta herbácea, de caule longo e ereto, com folhas de nervuras pouco salientes e pedúnculos compridos.'
				},
				{
					id: 6234,
					name: 'Coco',
					family: 'Arecaceae',
					price: '3,65',
					img: 'coconut-image.png',
					rating: '3,5',
					description: 'O coco é produzido pelo coqueiro que contém componentes que beneficiam o organismo humano. É um fruto carnoso, de casca fibrosa, endocarpo duro, de semente esbranquiçada e suculenta.'
				}
			]
		}
	}
}
</script>