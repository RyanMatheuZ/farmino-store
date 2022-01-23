<template>
	<section class="container mx-auto">
		<div class="px-6 md:px-32">
			<ProductsCard :products="vegetables" />
		</div>
	</section>
</template>

<script>
const ProductsCard = () => import('../components/Products/ProductsCard')

export default {
	name: 'Vegetables',

	components: {
		ProductsCard
	},

	data() {
		return {
			vegetables: [
				{
					id: 4820,
					name: 'Abóbora',
					family: 'Cucurbitaceae',
					price: '4,20',
					img: 'pumpkin-image.png',
					rating: '4,0',
					description: 'Um dos alimentos mais versáteis do mundo, é fruto da aboboreira. Nativa da América do Sul, ela é cultivada em todo o mundo por ser muito nutritiva e saborosa.'
				},
				{
					id: 2089,
					name: 'Alho',
					family: 'Amaryllidaceae',
					price: '13,50',
					img: 'garlic-image.png',
					rating: '4,1',
					description: 'Formado por um bulbo arredondado (conhecido como cabeça). Seu forte aroma deve-se à presença da alicina (óleo volátil sulfuroso).'
				},
				{
					id: 9081,
					name: 'Berinjela',
					family: 'Solanaceae',
					price: '4,80',
					img: 'aubergine-image.png',
					rating: '3,8',
					description: 'Uma solanaceae arbustiva, anual, originária da Índia. É sensível ao frio, às geadas e ao excesso de chuva na altura da floração.'
				},
				{
					id: 1183,
					name: 'Chuchu',
					family: 'Cucurbitaceae',
					price: '2,40',
					img: 'chayote-image.png',
					rating: '4,9',
					description: 'Pode ser cultivado em horta caseira. Segundo alguns historiadores, o chuchu já era cultivado no Caribe na época do descobrimento da América.'
				},
				{
					id: 2019,
					name: 'Beterraba',
					family: 'Amaranthaceae',
					price: '3,30',
					img: 'beet-image.png',
					rating: '5,0',
					description: 'Encontrada na forma de uma raiz, rica em açúcar, proteínas, vitamina A, B1, B2, B5, C, potássio, sódio, fósforo, cálcio, zinco, ferro e manganês.'
				},
				{
					id: 3220,
					name: 'Gengibre',
					family: 'Zingiberaceae',
					price: '12,30',
					img: 'ginger-image.png',
					rating: '3,5',
					description: 'Planta herbácea podendo atingir 1,50m de altura, de caule articulado, rizoma horizontal, comprido lateralmente.'
				},
				{
					id: 5489,
					name: 'Mandioca',
					family: 'Euphorbiaceae',
					price: '2,50',
					img: 'manioc-image.png',
					rating: '4,8',
					description: 'Uma espécie arbustiva, lenhosa e perene, a qual pode atingir até cinco metros de altura. Apresenta folhas simples, constituídas por lâmina e pecíolo.'
				},
				{
					id: 8173,
					name: 'Milho',
					family: 'Gramíneas',
					price: '21,00',
					img: 'corn-image.png',
					rating: '5,0',
					description: 'Espécie anual, estival, cespitosa, monóico-monoclina, classificada no grupo das plantas C-4, com ampla adaptação a diferentes condições de ambiente.'
				},
				{
					id: 2941,
					name: 'Quiabo',
					family: 'Malvaceae',
					price: '6,30',
					img: 'okra-image.png',
					rating: '3,8',
					description: 'Alimento muito comum na culinária típica de Minas Gerais e Bahia, com pratos tradicionais como o frango com quiabo e o caruru.'
				},
				{
					id: 1424,
					name: 'Pepino',
					family: 'Cucurbitaceae',
					price: '3,75',
					img: 'cucumber-image.png',
					rating: '4,9',
					description: 'Fruto imaturo de formato alongado e cilíndrico, de coloração predominantemente esverdeada, com casca lisa.'
				},
				{
					id: 4027,
					name: 'Batata',
					family: 'Solanaceae',
					price: '4,55',
					img: 'potato-image.png',
					rating: '4,2',
					description: 'Contém mais de 2000 espécies. Destas, cerca de 160 produzem tubérculos. Entretanto, apenas cerca de 20 espécies de batata são cultivadas.'
				},
				{
					id: 2022,
					name: 'Nabo',
					family: 'Brassicaceae',
					price: '45,00',
					img: 'turnip-image.png',
					rating: '4,3',
					description: 'Seu sistema em 60 dias cobre cerca de 70% do solo. Seu sistema radicular é pivotante, bastante profundo, atingindo mais de 2 metros.'
				}
			]
		}
	}
}
</script>