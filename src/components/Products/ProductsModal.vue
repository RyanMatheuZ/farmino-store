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
				class="bg-white rounded-md outline-none ml-2 mt-2 p-1"
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
						@click="addToCart(
							name = productInformations.name,
							family = productInformations.family,
							price = productInformations.price,
							img = productInformations.img
						)"
						title="Adicionar ao carrinho"
						class="outline-none flex items-center justify-between bg-green-dark hover:bg-green-light
						transition-colors duration-300 ease-in-out text-white font-semibold rounded-lg p-2"
					>
						<img
							src="/icon/add-to-cart.svg"
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
import { mapState, mapMutations } from 'vuex'

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

	data() {
		return {
			sendProduct: {
				name: '',
				family: '',
				price: '',
				img: ''
			},

			productExistsInTheCart: null
		}
	},

	computed: {
		...mapState({
			productsInCart: state => state.productsInCart
		})
	},

	methods: {
		...mapMutations(['ADD_TO_CART']),

		closeCard() {
			this.$emit('closeCard', true)
		},

		addToCart(name, family, price, img) {
			this.productExistsInTheCart = this.productsInCart.find(product => product.name === name)

			if (this.productExistsInTheCart) {
				this.$swal({
					toast: true,
					position: 'top-end',
					showConfirmButton: false,
					timer: 4000,
					icon: 'error',
					title: name,
					text: 'Já existe no carrinho!'
				})

				return
			}

			this.sendProduct = { name, family, price, img }

			this.ADD_TO_CART(this.sendProduct)

			this.$swal({
				toast: true,
				position: 'top-end',
				showConfirmButton: false,
				timer: 4000,
				icon: 'success',
				title: name,
				text: 'Adicionado ao carrinho!'
			})
		}
	}
}
</script>