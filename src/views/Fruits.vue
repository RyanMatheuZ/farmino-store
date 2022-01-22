<template>
	<section class="container mx-auto">
		<div class="px-6 md:px-32">
			<ProductsCard :products="fruits" />
		</div>
	</section>
</template>

<script>
const ProductsCard = () => import('../components/Products/ProductsCard')

export default {
	name: 'Fruits',

	components: {
		ProductsCard
	},

	data() {
		return {
			fruits: [
				{
					id: 2894,
					name: 'Abacate',
					family: 'Lauraceae',
					price: '6,70',
					img: 'avocado-image.png',
					rating: '4,4',
					description: 'São do tipo drupa, com peso e forma muito variáveis, de 100g até mais de 1kg, possui uma casca que pode ser fina, quebradiça ou grossa.'
				},
				{
					id: 8270,
					name: 'Banana',
					family: 'Musaceae',
					price: '4,75',
					img: 'banana-image.png',
					rating: '4,8',
					description: 'Originada na Ásia, somente foi conhecida na Europa e nos Estados Unidos no século 17. O termo banana é de origem africana, onde na Guiné os portugueses a conheceram.'
				},
				{
					id: 3598,
					name: 'Pitaya',
					family: 'Cactaceae',
					price: '15,00',
					img: 'dragon-fruit-image.png',
					rating: '5,0',
					description: 'Essa fruta tem sabor suave e doce, sendo agradável para qualquer paladar. A pitaya é fruto é um tipo de cacto da família Cactaceae, do gênero Hylocereus.'
				},
				{
					id: 1291,
					name: 'Laranja',
					family: 'Rutaceae',
					price: '3,50',
					img: 'orange-image.png',
					rating: '3,9',
					description: 'Citrus sinensis L Osb. é a espécie da laranja da qual o Brasil é o maior produtor do mundo e também o maior exportador de suco da fruta.'
				},
				{
					id: 9384,
					name: 'Goiaba',
					family: 'Myrtaceae',
					price: '5,30',
					img: 'guava-image.png',
					rating: '4,1',
					description: 'É uma das frutas mais ricas em nutrientes, sendo também uma das mais importantes, cultivadas e comercializadas. Adapta-se muito bem em nosso país.'
				},
				{
					id: 8274,
					name: 'Cereja',
					family: 'Rosaceae',
					price: '35,00',
					img: 'cherry-image.png',
					rating: '4,5',
					description: 'A produção de cerejas praticamente não existe no Brasil, apesar de haver condições na região Sul, onde ocorre a produção de maçãs.'
				},
				{
					id: 5783,
					name: 'Mamão',
					family: 'Caricaceae',
					price: '7,00',
					img: 'papaya-image.png',
					rating: '5,0',
					description: 'As variedades de mamão comercializadas são basicamente de três tipos. O tipo comum é hoje só encontrado em feiras de pequenas cidades.'
				},
				{
					id: 5403,
					name: 'Morango',
					family: 'Rosaceae',
					price: '12,50',
					img: 'strawberry-image.png',
					rating: '4,7',
					description: 'O fruto é um aquênio, duro, sendo a parte comestível uma estrutura constituída por um receptáculo carnoso, de cor vermelha, consumido ao natural.'
				},
				{
					id: 2225,
					name: 'Abacaxi',
					family: 'Bromeliaceae',
					price: '6,60',
					img: 'pineapple-image.png',
					rating: '4,0',
					description: 'O abacaxi é uma fruta de origem brasileira, uma das mais importantes comercializadas tanto ao natural como industrializada.'
				},
				{
					id: 1242,
					name: 'Maçã Verde',
					family: 'Rosaceae',
					price: '20,00',
					img: 'green-apple-image.png',
					rating: '4,0',
					description: 'É uma das frutas mais antigas conhecidas, de origem caucasiana, na Ásia. Após várias tentativas de produção no Brasil.'
				},
				{
					id: 1021,
					name: 'Uva',
					family: 'Vitaceae',
					price: '2,30',
					img: 'grape-image.png',
					rating: '4,6',
					description: 'É uma das mais antigas frutas consumidas pelo homem, é representada por várias espécies, sendo a mais importante a vinifera.'
				},
				{
					id: 7249,
					name: 'Pêssego',
					family: 'Rosaceae',
					price: '10,45',
					img: 'peach-image.png',
					rating: '3,9',
					description: 'O pêssego é originário da China, sendo uma das primeiras frutas introduzidas pelos portugueses no Brasil, tendo sido cultivada comercialmente apenas no século 20.'
				}
			]
		}
	}
}
</script>