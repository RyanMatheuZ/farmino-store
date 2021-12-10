<template>
	<section class="flex flex-col md:flex-row justify-between mt-20">
		<article class="space-y-5 pl-10 md:pl-28 py-10">
			<h2 class="text-black-100 font-semibold text-4xl">
				Veja as vantagens <br> de nossos produtos
			</h2>

			<p class="text-black-100 w-80">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui repudiandae, vel incidunt quo dolorum recusandae, fugit eveniet possimus minus tempora quos quisquam voluptatem, non nobis quis molestias autem at voluptatum!
			</p>

			<div>
				<RouterLink
					to=""
					class="text-green-dark text-lg font-bold"
				>
					Explorar
				</RouterLink>
			</div>
		</article>

		<div class="flex justify-between pr-10 md:pr-28 py-10">
			<article class="align rounded-3xl shadow-lg w-72 py-5 px-8">
				<figure>
					<img
						src="/img/peach-image.jpg"
						alt="Pêssego"
						title="Pêssego"
						draggable="false"
						width="200"
						class="mx-auto"
					>
				</figure>

				<div>
					<span class="text-3xl font-normal">
						Pêssego
					</span>

					<p class="text-black-100 mt-2">
						Fruta originária da China e muito consumida pelo seu sabor doce.
					</p>
				</div>
			</article>
		</div>
	</section>
</template>

<script>
export default {
	name: 'HomeProductsAdvantages'
}
</script>