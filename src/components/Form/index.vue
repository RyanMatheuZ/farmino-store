<template>
	<div class="container mx-auto px-6 md:px-16">
		<form class="bg-black-100 border-green-dark border-l-4 rounded-lg max-w-5xl mx-auto px-3 py-4">
			<!-- NAME -->
			<div class="flex flex-col">
				<label
					for="name"
					class="text-green-light text-lg font-semibold"
				>
					Nome:
				</label>

				<input
					@change="$v.name.$touch()"
					v-model="name"
					type="text"
					id="name"
					placeholder="Digite aqui seu nome"
					class="outline-none ring-green-dark focus:ring-2 rounded-md my-3 p-3"
				>

				<span
					v-if="$v.name.$error"
					class="text-red-400 font-semibold mt-0.5 mb-1 ml-3"
				>
					- Informe seu nome!
				</span>

				<span
					v-if="!$v.name.minLength"
					class="text-red-400 font-semibold mt-0.5 mb-1 ml-3"
				>
					- O mínimo de letras são {{ $v.name.$params.minLength.min }}!
				</span>
			</div>

			<!-- EMAIL -->
			<div class="flex flex-col">
				<label
					for="email"
					class="text-green-light text-lg font-semibold"
				>
					E-mail:
				</label>

				<input
					@change="$v.email.$touch()"
					v-model="email"
					type="email"
					id="email"
					placeholder="Digite aqui seu e-mail"
					class="outline-none ring-green-dark focus:ring-2 rounded-md my-3 p-3"
				>

				<span
					v-if="$v.email.$error"
					class="text-red-400 font-semibold mt-0.5 mb-1 ml-3"
				>
					- Informe um e-mail válido!
				</span>
			</div>

			<!-- MESSAGE -->
			<div class="flex flex-col">
				<label
					for="message"
					class="text-green-light text-lg font-semibold"
				>
					Mensagem:
				</label>

				<textarea
					@change="$v.message.$touch()"
					v-model="message"
					id="message"
					placeholder="Digite aqui sua mensagem"
					class="outline-none resize-y ring-green-dark focus:ring-2 rounded-md mt-3 p-3"
				></textarea>

				<span
					v-if="$v.message.$error"
					class="text-red-400 font-semibold mt-0.5 mb-1 ml-3"
				>
					- Informe sua mensagem!
				</span>

				<span
					v-if="!$v.message.minLength"
					class="text-red-400 font-semibold mt-0.5 mb-1 ml-3"
				>
					- O mínimo de letras são {{ $v.message.$params.minLength.min }}!
				</span>
			</div>

			<!-- BUTTON -->
			<div class="flex space-x-3">
				<button
					@click.prevent="onSubmit()"
					type="submit"
					class="flex-1 md:flex-none bg-green-dark hover:bg-green-light text-white font-semibold outline-none transition-colors duration-200 ease-in-out md:w-32 rounded-sm mt-4 px-5 py-3"
				>
					Enviar
				</button>
			</div>
		</form>

		<section class="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-5xl mx-auto pt-2">
			<BoxAddress />

			<BoxPhone />

			<BoxEmail />
		</section>
	</div>
</template>

<script>
const { validationMixin } = require('vuelidate')
const { required, email, minLength } = require('vuelidate/lib/validators')

const BoxAddress = () => import('./Box/BoxAddress')
const BoxPhone = () => import('./Box/BoxPhone')
const BoxEmail = () => import('./Box/BoxEmail')

export default {
	name: 'Form',

	components: {
		BoxAddress,
		BoxPhone,
		BoxEmail
	},

	data() {
		return {
			name: '',
			email: '',
			message: '',
		}
	},

	mixins: [ validationMixin ],

	validations: {
		name: { required, minLength: minLength(4) },
		email: { required, email },
		message: { required, minLength: minLength(20) }
	},

	methods: {
		onSubmit() {
			!this.$v.$invalid ? alert('Ok!') : this.$v.$touch()
		}
	}
}
</script>