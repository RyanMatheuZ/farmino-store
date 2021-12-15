<template>
	<section>
		<div class="container flex flex-col items-center justify-center xl:flex-row xl:items-start xl:space-x-32 mx-auto mt-20">
			<article class="space-y-5 py-10">
				<h2 class="text-black-100 font-semibold text-4xl">
					Veja as vantagens <br> de nossos produtos
				</h2>

				<p class="text-black-100 w-80">
					Produtos 100% orgânicos e naturais, sem o uso de agrotóxicos ou pesticidas, ideais para sua saúde e boa alimentação!
				</p>

				<div>
					<RouterLink
						to="/products"
						class="flex justify-between text-green-dark text-lg font-bold max-w-max transform hover:translate-x-3 transition-transform duration-500 ease-in-out"
					>
						Explorar

						<img
							src="/icon/arrow-right.svg"
							alt="Explorar"
							title="Explorar"
							draggable="false"
							loading="lazy"
							width="30"
						>
					</RouterLink>
				</div>
			</article>

			<div class="flex flex-wrap justify-center py-10">
				<article class="rounded-3xl shadow-lg w-72 mx-3 md:mx-5 md:mb-5 py-5 px-8">
					<figure>
						<img
							src="/img/peach-image.jpg"
							alt="Pêssego"
							title="Pêssego"
							draggable="false"
							loading="lazy"
							width="200"
							class="mx-auto"
						>
					</figure>

					<div>
						<span class="text-yellow-600 text-3xl font-semibold">
							Pêssego
						</span>

						<p class="text-black-100 mt-2">
							Fruta originária da China e muito consumida pelo seu sabor doce.
						</p>
					</div>
				</article>

				<article class="rounded-3xl shadow-lg w-72 mx-3 md:mx-5 md:mt-5 py-5 px-8">
					<figure>
						<img
							src="/img/tomato-image.jpg"
							alt="Tomate"
							title="Tomate"
							draggable="false"
							loading="lazy"
							width="200"
							class="mx-auto"
						>
					</figure>

					<div>
						<span class="text-red-600 text-3xl font-semibold">
							Tomate
						</span>

						<p class="text-black-100 mt-2">
							A palavra portuguesa tomate vem do castelhano tomate, derivada do náuatle tomatl.
						</p>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'HomeProductsAdvantages'
}
</script>