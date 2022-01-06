<template>
	<section>
		<div class="bg-black-100 px-6 md:px-16">
			<div class="container mx-auto py-10">
				<h2 class="flex items-center text-white text-3xl md:text-5xl font-bold">
					<div class="bg-green-dark h-2 w-2 rounded-full mr-2" />

					Depoimentos
				</h2>

				<div class="flex justify-between flex-col lg:flex-row">
					<article
						v-for="(testimonial, index) of testimonials"
						:key="`testimonial-${index}`"
						class="flex flex-1 flex-col bg-white mt-10 rounded-tl-lg rounded-br-lg cursor-default m-1 p-4"
					>
						<img
							:src="require(`/public/img/testimonials/${testimonial.img}`)"
							:alt="testimonial.name"
							:title="testimonial.name"
							draggable="false"
							class="h-36 w-36 rounded-full mx-auto"
						>

						<span
							title="Nome"
							class="text-black-100 text-center font-semibold mt-4"
						>
							{{ testimonial.name }}
						</span>

						<span
							title="Profissão"
							class="text-green-dark text-center font-semibold uppercase mt-1"
						>
							{{ testimonial.profession }}
						</span>

						<p
							title="Depoimento"
							class="text-black-100 text-center mt-4"
						>
							{{ testimonial.text }}
						</p>
					</article>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'AboutTestimonials',

	data() {
		return {
			testimonials: [
				{
					name: 'Maurício Souza',
					profession: 'Jogador de Voleibol',
					img: 'mauricio-souza.jpg',
					text: 'Sem sombra de dúvidas é a melhor loja de orgânicos. Por meio dela, tenho uma ótima alimentação!'
				},
				{
					name: 'Marta Silva',
					profession: 'Jogadora de Futebol',
					img: 'marta-silva.jpg',
					text: 'A alimentação saudável proporcionou uma grande evolução em minha carreira. SOU GRATA.'
				},
				{
					name: 'Vitor Belfort',
					profession: 'Lutador',
					img: 'vitor-belfort.jpg',
					text: 'Para ser um grande lutador, somente o treino não é suficiente, ele deve ser aliado de uma boa alimentação...'
				},
				{
					name: 'Daniele Hypólito',
					profession: 'Ginasta',
					img: 'daniele-hypolito.jpg',
					text: 'Acredito que sempre fui uma atleta saudável, porém com a Farmino pude ir para o próximo nível!!'
				}
			]
		}
	}
}
</script>