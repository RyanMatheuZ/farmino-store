<template>
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
</template>

<script>
export default {
	name: 'FormInputEmail'
}
</script>