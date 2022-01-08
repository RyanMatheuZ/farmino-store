<template>
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
</template>

<script>
export default {
	name: 'FormInputMessage'
}
</script>