<template>
	<header class="bg-white flex items-center justify-between shadow-lg px-20 py-10">
		<RouterLink to="/">
			<img
				src=""
				alt="Farmino"
				title="Farmino"
				draggable="false"
			>
		</RouterLink>

		<nav>
			<ul class="flex">
				<li
					v-for="(item, index) of navItems"
					:key="index"
					class="mx-3"
				>
					<RouterLink
						:to="item.url"
						class="font-medium"
					>
						{{ item.label }}
					</RouterLink>
				</li>

				<li>
					<RouterLink to="/product-cart">
						<img
							src="@/assets/icon/cart.svg"
							alt="Carrinho de produtos"
							title="Carrinho de produtos"
							draggable="false"
						>
					</RouterLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Header',

	data() {
		return {
			navItems: [
				{
					label: 'Início',
					url: '/'
				},
				{
					label: 'Categorias',
					url: ''
				},
				{
					label: 'Ofertas',
					url: '/offers'
				},
				{
					label: 'Sobre',
					url: '/about'
				},
				{
					label: 'Contato',
					url: '/contact'
				}
			]
		}
	}
}
</script>