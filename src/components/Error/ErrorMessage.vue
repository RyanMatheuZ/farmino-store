<template>
	<article class="flex flex-col justify-center space-y-5 border-black-100 border-l-4 mx-5 my-10 pl-3">
		<h1 class="text-green-light text-6xl font-bold">
			Oops!
		</h1>

		<p class="text-black-100 text-3xl">
			Página não encontrada...
		</p>

		<div class="flex items-center">
			<RouterLink
				to="/"
				class="bg-green-light text-white font-semibold rounded-full px-4 py-2"
			>
				Voltar ao início
			</RouterLink>
		</div>
	</article>
</template>

<script>
export default {
	name: 'ErrorMessage'
}
</script>