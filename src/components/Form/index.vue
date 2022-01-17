<template>
	<div class="container mx-auto px-6 md:px-16">
		<form class="bg-black-100 border-green-dark border-l-4 rounded-lg px-3 py-4">
			<div class="flex flex-col">
				<label
					for="input-name"
					class="text-green-light text-lg font-semibold"
				>
					Nome:
				</label>

				<input
					type="text"
					id="input-name"
					placeholder="Digite aqui seu nome"
					class="outline-none ring-green-dark focus:ring-2 rounded-md my-3 p-3"
				>

				<span></span>
			</div>

			<div class="flex flex-col">
				<label
					for="input-email"
					class="text-green-light text-lg font-semibold"
				>
					E-mail:
				</label>

				<input
					type="email"
					id="input-email"
					placeholder="Digite aqui seu e-mail"
					class="outline-none ring-green-dark focus:ring-2 rounded-md my-3 p-3"
				>

				<span></span>
			</div>

			<div class="flex flex-col">
				<label
					for="input-message"
					class="text-green-light text-lg font-semibold"
				>
					Mensagem:
				</label>

				<textarea
					id="input-message"
					placeholder="Digite aqui sua mensagem"
					class="outline-none resize-y ring-green-dark focus:ring-2 rounded-md mt-3 p-3"
				></textarea>

				<span></span>
			</div>
		</form>

		<section class="grid grid-cols-1 md:grid-cols-3 gap-2 pt-2">
			<BoxAddress />

			<BoxPhone />

			<BoxEmail />
		</section>
	</div>
</template>

<script>
const BoxAddress = () => import('./Box/BoxAddress')
const BoxPhone = () => import('./Box/BoxPhone')
const BoxEmail = () => import('./Box/BoxEmail')

export default {
	name: 'Form',

	components: {
		BoxAddress,
		BoxPhone,
		BoxEmail
	}
}
</script>