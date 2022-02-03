<template>
	<div class="space-y-5 w-max mx-auto">
		<article class="space-y-3">
			<figure>
				<img
					src="/icon/cart-no-items.svg"
					alt="Carrinho vazio!"
					title="Carrinho vazio!"
					draggable="false"
					width="50"
					class="mx-auto"
				>
			</figure>

			<p class="text-green-dark text-xl md:text-2xl font-semibold text-center">
				Carrinho vazio!
			</p>
		</article>

		<p class="text-gray-500 text-lg md:text-xl text-center">
			Você ainda não possui produtos <br> em seu carrinho.
		</p>

		<div class="w-max mx-auto">
			<RouterLink
				to="/products"
				class="bg-green-dark hover:bg-green-light text-white font-semibold transition-colors duration-200 ease-in-out rounded-md outline-none px-4 py-2"
			>
				Ver produtos
			</RouterLink>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CartNoItems'
}
</script>