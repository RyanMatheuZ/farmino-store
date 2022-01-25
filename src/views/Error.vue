<template>
	<main>
		<div class="container flex flex-wrap items-center justify-evenly mx-auto">
			<ErrorMessage />

			<ErrorImage />
		</div>
	</main>
</template>

<script>
const ErrorMessage = () => import('../components/Error/ErrorMessage')
const ErrorImage = () => import('../components/Error/ErrorImage')

export default {
	name: 'Error',

	components: {
		ErrorMessage,
		ErrorImage
	},

	metaInfo: {
		title: 'Farmino | Error 404',

		meta: [
			{
				name: 'description',
				content: 'Oops! Página não encontrada...'
			}
		]
	}
}
</script>