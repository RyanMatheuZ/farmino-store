<template>
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
</template>

<script>
export default {
	name: 'FormInputName'
}
</script>