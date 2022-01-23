<template>
	<section class="container mx-auto">
		<div class="px-6 md:px-32">
			<ProductsCard :products="greens" />
		</div>
	</section>
</template>

<script>
const ProductsCard = () => import('../components/Products/ProductsCard')

export default {
	name: 'Greens',

	components: {
		ProductsCard
	},

	data() {
		return {
			greens: [
				{
					id: 8394,
					name: 'Agrião',
					family: 'Brassicaceae',
					price: '6,45',
					img: 'cress-image.png',
					rating: '3,9',
					description: 'Planta pequena, perene, herbácea, que pode atingir até 80 cm de altura; caule tenro, oco, carnoso e nodoso com a parte inferior rastejante na água.'
				},
				{
					id: 4938,
					name: 'Aipo',
					family: 'Apiaceae',
					price: '50,00',
					img: 'celery-image.png',
					rating: '4,2',
					description: 'Conhecido também como salsão, é um vegetal bastante utilizado em diversas receitas de sopas e saladas, além de também poder ser incluído em sucos verdes.'
				},
				{
					id: 9120,
					name: 'Cebolinha',
					family: 'Amaryllidaceae',
					price: '3,00',
					img: 'chive-image.png',
					rating: '4,5',
					description: 'Atinge no máximo, 30cm de altura, folhas cilindricas, lineares e longas; bulbos tunicados e arredondados, formados de 8-12 bulbilhos (dentes).'
				},
				{
					id: 2841,
					name: 'Couve-de-bruxelas',
					family: 'Brássicas',
					price: '36,50',
					img: 'brussels-sprouts-image.png',
					rating: '4,9',
					description: 'A parte comestível são gemas, na forma de pequenos repolhos com diâmetro entre 2,5 cm e 4cm. Considera-se que seja originária da Bélgica.'
				},
				{
					id: 1489,
					name: 'Coentro',
					family: 'Apiaceae',
					price: '3,25',
					img: 'cilantro-image.png',
					rating: '3,8',
					description: 'É uma hortaliça cuja maior importância no Brasil está associada ao consumo das folhas frescas, empregadas como condimento de intenso aroma.'
				},
				{
					id: 9161,
					name: 'Espinafre',
					family: 'Amaranthaceae',
					price: '2,00',
					img: 'spinach-image.png',
					rating: '4,1',
					description: 'Espécie nativa do sul da Ásia. Seu nome de origem árabe é "esbanach". Foi muito usado por médicos para fazer cataplasmas contra dores de fígado e estômago.'
				},
				{
					id: 9161,
					name: 'Hortelã',
					family: 'Lamiaceae',
					price: '9,10',
					img: 'mint-image.png',
					rating: '3,6',
					description: 'Erva aromática, rasteira, formando touceiras ramificadas. Possui flores branco violáceas, contidas em pequenos glomérulos terminais.'
				},
				{
					id: 8732,
					name: 'Oregano',
					family: 'Lamiaceae',
					price: '6,90',
					img: 'oregano-image.png',
					rating: '3,9',
					description: 'É um arbusto baixo e perene, de caules avermelhados levemente lenhosos, folhas verdes penugentas e flores rosas ou brancas.'
				},
				{
					id: 1928,
					name: 'Repolho',
					family: 'Brassicaceae',
					price: '2,25',
					img: 'cabbage-image.png',
					rating: '5,0',
					description: 'A formação da cabeça do repolho se deve à interrupção do crescimento do meristema terminal, que impede a expansão das folhas internas.'
				},
				{
					id: 2837,
					name: 'Ruibarbo',
					family: 'Polygonaceae',
					price: '23,90',
					img: 'rhubarb-image.png',
					rating: '4,3',
					description: 'Uma planta comestível que também tem sido utilizada para fins medicinais, pois possui um poderoso efeito estimulante e digestivo.'
				},
				{
					id: 4652,
					name: 'Majericão',
					family: 'Lamiaceae',
					price: '2,80',
					img: 'basil-image.png',
					rating: '3,9',
					description: 'É considerada uma planta perene, mas em condições de cortes sucessivos, a espécie apresenta boas produtividades até o segundo ano de cultivo'
				},
				{
					id: 7869,
					name: 'Couve-flor',
					family: 'Brassicaceae',
					price: '12,20',
					img: 'cauliflower-image.png',
					rating: '4,7',
					description: 'Por ser uma hortaliça altamente nutritiva e muito saborosa a couve-flor é cultivada e apreciada em várias partes do mundo.'
				}
			]
		}
	}
}
</script>