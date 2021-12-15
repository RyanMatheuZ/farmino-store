<template>
	<section class="flex flex-col items-center space-y-5 md:flex-row md:justify-center md:space-x-5 md:space-y-0 transform translate-y-10 mx-5 md:mx-0">
		<article class="bg-blue-200 grid grid-cols-2 rounded-lg shadow-lg p-5">
			<div class="flex flex-col justify-center">
				<span class="uppercase text-green-800 text-xl font-bold">
					25% OFF
				</span>

				<h2 class="uppercase text-black-100 text-2xl font-bold mt-1">
					Frutas
				</h2>

				<RouterLink
					to=""
					class="bg-gray-700 hover:bg-gray-600 text-white font-semibold w-max rounded-sm transition-all ease-in-out duration-300 mt-5 px-5 py-2"
				>
					Conferir
				</RouterLink>
			</div>

			<figure class="flex items-center justify-center mx-2">
				<img
					src="/img/watermelon-image.png"
					alt="Frutas com desconto"
					title="Frutas com desconto"
					draggable="false"
					width="120"
				>
			</figure>
		</article>

		<article class="bg-yellow-200 grid grid-cols-2 rounded-lg shadow-lg p-5">
			<div class="flex flex-col justify-center">
				<span class="uppercase text-green-800 text-xl font-bold">
					45% OFF
				</span>

				<h2 class="uppercase text-black-100 text-2xl font-bold mt-1">
					Legumes
				</h2>

				<RouterLink
					to=""
					class="bg-yellow-700 hover:bg-yellow-600 text-white font-semibold w-max rounded-sm transition-all ease-in-out duration-300 mt-5 px-5 py-2"
				>
					Conferir
				</RouterLink>
			</div>

			<figure class="flex items-center justify-center mx-2">
				<img
					src="/img/onion-image.png"
					alt="Legumes com desconto"
					title="Legumes com desconto"
					draggable="false"
					width="120"
				>
			</figure>
		</article>

		<article class="bg-red-200 grid grid-cols-2 rounded-lg shadow-lg p-5">
			<div class="flex flex-col justify-center">
				<span class="uppercase text-green-800 text-xl font-bold">
					30% OFF
				</span>

				<h2 class="uppercase text-black-100 text-2xl font-bold mt-1">
					Verduras
				</h2>

				<RouterLink
					to=""
					class="bg-red-700 hover:bg-red-600 text-white font-semibold w-max rounded-sm transition-all ease-in-out duration-300 mt-5 px-5 py-2"
				>
					Conferir
				</RouterLink>
			</div>

			<figure class="flex items-center justify-center mx-2">
				<img
					src="/img/healthy-image.png"
					alt="Verduras com desconto"
					title="Verduras com desconto"
					draggable="false"
					width="120"
				>
			</figure>
		</article>
	</section>
</template>

<script>
export default {
	name: 'HomeOffers'
}
</script>