<template>
	<header class="bg-white shadow-lg">
		<div class="container flex flex-col items-start md:flex-row md:items-center md:justify-between mx-auto px-5 md:px-20 py-8">
			<!-- Logo -->
			<RouterLink 
				to="/"
				title="Farmino"
			>
				<img
					src="@/assets/icon/logo/logo.svg"
					alt="Farmino"
					draggable="false"
					class="mb-3 md:mb-0"
				>
			</RouterLink>

			<nav>
				<ul class="flex flex-col items-start space-y-2 md:flex-row md:items-center md:space-x-8 md:space-y-0 w-full">
					<!-- Menu Items -->
					<li
						v-for="(item, index) of navItems"
						:key="index"
						class="text-black-100 border-l-4 hover:border-green-light md:border-0 text-base md:text-lg font-medium transition-colors ease-in-out duration-300 py-1 md:py-0"
					>
						<RouterLink
							:to="item.url"
							class="ml-2 md:ml-0"
						>
							{{ item.label }}
						</RouterLink>
					</li>

					<!-- Cart -->
					<li
						title="Carrinho de produtos" 
						class="bg-green-light flex items-center justify-center rounded-full cursor-pointer h-11 w-11 md:ml-5 p-1"
					>
						<RouterLink to="/product-cart">
							<img
								src="@/assets/icon/cart.svg"
								alt="Carrinho de produtos"
								draggable="false"
								width="20"
							>
						</RouterLink>
					</li>

					<!-- Mobile Button -->
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
					label: 'Ofertas',
					url: '/#offers'
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

			activateMenu: false
		}
	}
}
</script>