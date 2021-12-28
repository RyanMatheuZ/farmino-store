<template>
	<div class="flex flex-wrap justify-center mt-8">
		<article
			v-for="product of products"
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

				<figure
					class="bg-gray-300 hover:bg-green-light transition-colors duration-300 ease-in-out rounded-md cursor-pointer p-3"
					title="Expadir"
				>
					<img
						src="/icon/expand-button.svg"
						alt="Expandir"
						title="Expandir"
						draggable="false"
						width="20"
					>
				</figure>
			</div>
		</article>
	</div>
</template>

<script>
export default {
	name: 'ProductsCard',

	props: {
		products: {
			type: Array,
			required: true
		}
	}
}
</script>