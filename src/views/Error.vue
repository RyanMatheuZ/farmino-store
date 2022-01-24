<template>
	<main>
		<div class="container flex flex-wrap items-center justify-evenly mx-auto">
			<article class="space-y-5 mx-3 my-6">
				<h1 class="text-green-light text-6xl font-bold">
					Oops!
				</h1>

				<p class="text-black-100 text-3xl">
					Página não encontrada...
				</p>

				<div>
					<RouterLink
						to="/"
						class="bg-green-light text-white font-semibold rounded-full px-4 py-2"
					>
						Voltar ao início
					</RouterLink>
				</div>
			</article>

			<figure class="max-w-2xl mx-3 my-6">
				<img 
					src="/icon/error.svg" 
					alt="Oops! Página não encontrada..."
					title="Página não encontrada!"
					draggable="false"
					class="w-max"
				>
			</figure>
		</div>
	</main>
</template>

<script>
export default {
	name: 'Error'
}
</script>