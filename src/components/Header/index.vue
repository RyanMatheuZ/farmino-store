<template>
	<header class="bg-white shadow-lg">
		<div class="container flex flex-wrap md:flex-nowrap md:items-center justify-between mx-auto px-5 md:px-20 py-7">
			<div class="w-1/2 md:w-auto">
				<RouterLink to="/">
					<img
						src="logo/logo.svg"
						alt="Farmino"
						title="Farmino"
						draggable="false"
						class="mb-5 md:mb-0 max-w-full"
						width="170"
					>
				</RouterLink>
			</div>

			<figure class="flex justify-end items-center md:hidden w-1/2 md:w-auto">
				<img
					@click="activateMenu()"
					src="icon/menu-mobile.svg"
					alt="Menu"
					title="Menu"
					width="40"
					class="rounded-full cursor-pointer"
				>
			</figure>

			<nav
				class="w-full md:w-auto md:inline-block"
				:class="{ 'hidden' : menuIsClose }"
			>
				<ul class="flex flex-col items-start space-y-2 md:flex-row md:items-center md:space-x-8 md:space-y-0 w-full">
					<li
						@click="activateMenu()"
						v-for="(item, index) of navItems"
						:key="index"
						class="text-black-100 border-l-4 border-green-opaque hover:border-green-light md:border-0 text-base md:text-lg font-medium transition-colors ease-in-out duration-300 py-1 md:py-0"
					>
						<RouterLink
							:to="item.url"
							class="ml-2 md:ml-0"
						>
							{{ item.label }}
						</RouterLink>
					</li>

					<li
						@click="activateMenu()"
						title="Carrinho de produtos"
						class="bg-green-light flex items-center justify-center rounded-full cursor-pointer transition-all ease-in duration-200 h-11 w-11 md:ml-5 p-1"
					>
						<RouterLink to="/product-cart">
							<img
								src="/icon/cart.svg"
								alt="Carrinho de produtos"
								draggable="false"
								width="20"
							>
						</RouterLink>
					</li>
				</ul>
			</nav>
		</div>
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
					label: 'Produtos',
					url: '/products'
				},
				{
					label: 'Sobre',
					url: '/about'
				},
				{
					label: 'Contato',
					url: '/contact'
				}
			],

			menuIsClose: true
		}
	},

	methods: {
		activateMenu() {
			this.menuIsClose = !this.menuIsClose
		}
	}
}
</script>