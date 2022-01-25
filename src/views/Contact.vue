<template>
	<main>
		<FormHero />

		<Form />
	</main>
</template>

<script>
const FormHero = () => import('../components/Form/FormHero')
const Form = () => import('../components/Form')

export default {
	name: 'Contact',

	components: {
		Form,
		FormHero
	},

	metaInfo: {
		title: 'Farmino | Contato',

		meta: [
			{
				name: 'description',
				content: 'Dúvidas? Por favor, entre em contato conosco!'
			}
		]
	}
}
</script>