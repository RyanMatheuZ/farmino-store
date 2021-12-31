<template>
	<section
		:class="{ 'hidden' : modalStatus }"
		class="flex items-center justify-center"
	>
		<div
			class="bg-black-100 opacity-50 w-screen h-screen fixed top-0 left-0 z-10"
			aria-hidden="false"
		/>

		<article class="bg-blue-50 md:rounded-lg w-full md:max-w-md h-full md:h-auto fixed transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 z-20 cursor-default">
			<button
				@click="closeCard()"
				title="Voltar"
				class="outline-none ml-2 mt-3"
			>
				<img
					src="/icon/back-button.svg"
					alt="Voltar"
					title="Voltar"
					draggable="false"
					width="35"
				>
			</button>

			<figure class="p-5">
				<img
					:src="require(`/public/img/${productInformations.img}`)"
					:alt="productInformations.name"
					:title="productInformations.name"
					draggable="false"
					class="mx-auto"
				>
			</figure>

			<div class="bg-white rounded-t-3xl md:rounded-b-lg h-full p-5">
				<div class="bg-blue-50 rounded-full w-20 mx-auto py-1" />

				<div class="flex items-center justify-between mt-2">
					<span
						title="Preço"
						class="bg-green-light bg-opacity-75 block text-green-700 text-md font-semibold rounded-full w-max px-3 py-1"
					>
						R$ {{ productInformations.price }}
					</span>

					<span
						title="Avaliação"
						class="flex items-center justify-between text-green-700 text-md font-semibold py-1"
					>
						<img
							src="/icon/star.svg"
							alt="Avaliação"
							draggable="false"
							width="20"
							class="mr-0.5"
						>

						{{ productInformations.rating }} Avaliação
					</span>
				</div>

				<span
					title="Nome"
					class="block text-gray-900 text-4xl font-bold w-max mt-3"
				>
					{{ productInformations.name }}
				</span>

				<p
					title="Descrição"
					class="mt-4"
				>
					{{ productInformations.description }}
				</p>

				<div class="mt-3">
					<button
						title="Adicionar ao carrinho"
						class="outline-none flex items-center justify-between bg-green-dark text-white font-semibold rounded-lg p-2"
					>
						<img
							src="/icon/plus.svg"
							alt="Adicionar ao carrinho"
							title="Adicionar ao carrinho"
							draggable="false"
							width="15"
							class="mr-2"
						>

						Adicionar ao carrinho
					</button>
				</div>
			</div>
		</article>
	</section>
</template>

<script>
export default {
	name: 'ProductsModal',

	props: {
		modalStatus: {
			type: Boolean,
			required: true
		},

		productInformations: {
			type: Object,
			required: true
		}
	},

	methods: {
		closeCard() {
			this.$emit('closeCard', true)
		}
	}
}
</script>