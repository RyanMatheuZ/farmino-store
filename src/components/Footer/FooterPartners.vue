<template>
	<ul>
		<li class="text-green-900 text-lg font-semibold mb-2">
			Parceiros
		</li>

		<li
			v-for="(item, index) in partners"
			:key="index"
			class="mb-1"
		>
			<a
				:href="item.link"
				:title="item.label"
				target="_blank"
				rel="noopener noreferrer"
				class="text-black-100 hover:text-yellow-medium transition-colors duration-200 ease-in-out text-md"
			>
				{{ item.label }}
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'FooterPartners',

	data() {
		return {
			partners: [
				{
					label: 'Instituto Chão',
					link: 'http://www.institutochao.org/'
				},
				{
					label: 'A Boa da Terra',
					link: 'https://www.aboaterra.com.br/'
				},
				{
					label: 'Sacolão da Lapa',
					link: 'https://www.facebook.com/SacolaoLapa'
				},
				{
					label: 'Clube Orgânico',
					link: 'https://www.clubeorganico.com/'
				},
				{
					label: 'Feira Terra Viva',
					link: 'https://www.instagram.com/feiraterraviva/?igshid=npjgcblds5dw'
				}
			]
		}
	}
}
</script>