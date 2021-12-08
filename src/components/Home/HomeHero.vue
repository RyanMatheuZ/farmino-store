<template>
	<section class="bg-hero bg-cover bg-center">
		<div class="bg-gray-100 md:bg-transparent bg-opacity-90 md:container md:mx-auto">
			<article class="space-y-7 p-6 md:p-16">
				<header>
					<h1 class="text-black-100 text-4xl md:text-6xl font-bold space-y-1 md:space-y-4">
						<span class="block">
							Junte-se à nós, entre
						</span>

						<span class="block">
							para o movimento
						</span>

						<span class="uppercase block">
							orgânico
						</span>
					</h1>
				</header>

				<div>
					<p class="text-yellow-medium font-semibold text-md md:text-lg">
						Saiba diferenciar o: VOCÊ QUER ou VOCÊ PRECISA?
					</p>

					<p class="text-yellow-medium font-semibold text-md md:text-lg">
						Pequenas mudanças fazem toda diferença no cotidiano do nosso planeta!
					</p>
				</div>

				<RouterLink
					to="/products"
					class="flex items-center justify-between uppercase bg-green-dark hover:bg-green-light text-white text-md font-semibold rounded-md transition-all ease-in-out duration-300 w-max p-3"
				>
					<img
						src="/icon/cash.svg"
						alt="Comprar agora"
						title="Comprar agora"
						draggable="false"
						width="20"
						class="mr-3"
					>
					comprar
				</RouterLink>
			</article>
		</div>

		<HomeOffers />
	</section>
</template>

<script>
const HomeOffers = () => import('./HomeOffers')

export default {
	name: 'HomeHero',

	components: {
		HomeOffers
	}
}
</script>