<template>
	<div class="container mx-auto">
		<section class="px-6 md:px-16">
			<article
				v-for="(product, index) of productsInCart"
				:key="index"
				title="Produto"
				class="flex items-center justify-evenly bg-white shadow-lg rounded-lg w-max p-10"
			>
				<!-- PRODUCT IMAGE -->
				<figure>
					<img
						:src="require(`/public/img/${product.img}`)"
						:alt="product.name"
						:title="product.name"
						draggable="false"
						width="150"
					>
				</figure>

				<!-- PRODUCT INFORMATIONS -->
				<div class="space-y-5 cursor-default ml-10">
					<div class="space-y-1">
						<p
							title="Nome"
							class="text-black-100 text-2xl font-bold"
						>
							{{ product.name }}
						</p>

						<p
							title="Família"
							class="text-gray-500 text-md font-semibold"
						>
							{{ product.family }}
						</p>
					</div>

					<p
						title="Preço"
						class="text-black-100 font-semibold"
					>
						<span class="text-base">
							R$
						</span>

						<span class="text-lg">
							{{ product.price }}
						</span>
					</p>
				</div>

				<!-- PRODUCT QUANTITY -->
				<div>

				</div>
			</article>
		</section>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'CartWithItems',

	computed: {
		...mapState({
			productsInCart: state => state.productsInCart
		})
	}
}
</script>