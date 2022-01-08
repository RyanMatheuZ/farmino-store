<template>
	<div
		class="flex flex-col items-center justify-evenly bg-green-light border-black-100 border-b-4 rounded-lg shadow-xl p-5"
		title="Endereço"
	>
		<img
			src="/icon/address-box.svg"
			alt="Endereço"
			draggable="false"
			width="35"
		>

		<span class="font-semibold mt-1">
			Matão-SP, Brasil
		</span>
	</div>
</template>

<script>
export default {
	name: 'BoxAddress'
}
</script>