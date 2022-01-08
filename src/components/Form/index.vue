<template>
	<div class="container mx-auto px-6 md:px-16">
		<form class="bg-black-100 border-green-dark border-l-4 rounded-lg px-3 py-4">
			<FormInputName />

			<FormInputEmail />

			<FormInputMessage />
		</form>

		<section class="grid grid-cols-1 md:grid-cols-3 gap-2 pt-2">
			<BoxAddress />

			<BoxPhone />

			<BoxEmail />
		</section>
	</div>
</template>

<script>
const FormInputName = () => import('./FormInputName')
const FormInputEmail = () => import('./FormInputEmail')
const FormInputMessage = () => import('./FormInputMessage')
const BoxAddress = () => import('./Box/BoxAddress')
const BoxPhone = () => import('./Box/BoxPhone')
const BoxEmail = () => import('./Box/BoxEmail')

export default {
	name: 'Form',

	components: {
		FormInputName,
		FormInputEmail,
		FormInputMessage,
		BoxAddress,
		BoxPhone,
		BoxEmail
	}
}
</script>