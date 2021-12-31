<template>
	<div>
		<div class="flex flex-wrap justify-center mt-8">
			<article
				v-for="(product, index) of products"
				:key="`product-${product.id}`"
				class="bg-white flex flex-col justify-between shadow-lg rounded-xl w-44 m-4 p-5"
			>
				<figure>
					<img
						:src="require(`/public/img/${product.img}`)"
						:alt="product.name"
						:title="product.name"
						draggable="false"
						class="h-28"
					>
				</figure>

				<div class="flex flex-col mt-2">
					<span
						class="text-gray-800 text-lg font-bold cursor-default"
						title="Nome"
					>
						{{ product.name }}
					</span>

					<span
						class="text-gray-700 text-sm font-semibold cursor-default"
						title="Família"
					>
						{{ product.family }}
					</span>
				</div>

				<div class="flex items-center justify-between cursor-default mt-3">
					<span
						class="font-bold"
						title="Preço"
					>
						<span class="text-xs">
							R$
						</span>

						<span class="text-md">
							{{ product.price }}
						</span>
					</span>

					<button
						@click="expandCard(index)"
						title="Expadir"
						class="bg-gray-300 hover:bg-green-light outline-none transition-colors duration-300 ease-in-out rounded-md cursor-pointer p-3"
					>
						<img
							src="/icon/expand-button.svg"
							alt="Expandir"
							title="Expandir"
							draggable="false"
							width="20"
						>
					</button>
				</div>
			</article>
		</div>

		<ProductsModal
			@closeCard="modalIsDisabled = $event"
			:modalStatus="modalIsDisabled"
			:productInformations="productsModal"
		/>
	</div>
</template>

<script>
const ProductsModal = () => import('./ProductsModal')

export default {
	name: 'ProductsCard',

	components: {
		ProductsModal
	},

	props: {
		products: {
			type: Array,
			required: true
		}
	},

	data() {
		return {
			modalIsDisabled: true,

			productsModal: {
				name: '',
				family: '',
				price: '',
				img: '',
				rating: '',
				description: ''
			}
		}
	},

	methods: {
		expandCard(index) {
			this.modalIsDisabled = false

			this.productsModal.name = this.products[index].name
			this.productsModal.family = this.products[index].family
			this.productsModal.price = this.products[index].price
			this.productsModal.img = this.products[index].img
			this.productsModal.rating = this.products[index].rating
			this.productsModal.description = this.products[index].description
		}
	}
}
</script>