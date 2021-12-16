<template>
	<ul>
		<li class="text-green-900 text-lg font-semibold mb-2">
			Contatos
		</li>

		<li
			v-for="(item, index) in contacts"
			:key="index"
			class="flex cursor-default mb-1"
		>
			<img
				:src="require(`/public/icon/${item.icon}`)"
				:alt="item.desc"
				:title="item.desc"
				draggable="false"
				width="20"
				class="mr-2"
			>

			{{ item.label }}
		</li>
	</ul>
</template>

<script>
export default {
	name: 'FooterContacts',

	data() {
		return {
			contacts: [
				{
					label: 'Matão-SP, Brasil',
					icon: 'address.svg',
					desc: 'Endereço'
				},
				{
					label: '+55 (16) 99380-3392',
					icon: 'phone.svg',
					desc: 'Telefone'
				},
				{
					label: 'office@farmino.com',
					icon: 'email.svg',
					desc: 'E-mail'
				}
			]
		}
	}
}
</script>