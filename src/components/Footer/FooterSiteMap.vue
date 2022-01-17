<template>
	<ul>
		<li class="text-green-900 text-lg font-semibold mb-2">
			Mapa do site
		</li>

		<li
			@click="scrollTop()"
			v-for="(item, index) of siteMap"
			:key="index"
			class="mb-1"
		>
			<RouterLink
				:to="item.link"
				:title="item.label"
				class="text-black-100 hover:text-yellow-medium transition-colors duration-200 ease-in-out text-md"
			>
				{{ item.label }}
			</RouterLink>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'FooterSiteMap',

	data() {
		return {
			siteMap: [
				{
					label: 'Início',
					link: '/'
				},
				{
					label: 'Produtos',
					link: '/products'
				},
				{
					label: 'Sobre',
					link: '/about'
				},
				{
					label: 'Contato',
					link: '/contact'
				},
				{
					label: 'Carrinho',
					link: '/product-cart'
				}
			]
		}
	},

	methods: {
		scrollTop() {
			scrollTo(0, 0)
		}
	}
}
</script>