<template>
	<header class="container mx-auto">
		<nav class="px-6 md:px-16">
			<ul class="flex items-center space-x-5">
				<li
					v-for="(item, index) of navBarItems"
					:key="index"
				>
					<span class="text-black-100 hover:text-green-light text-lg font-semibold opacity-60 hover:opacity-100 duration-200 transition-opacity ease-in select-none cursor-pointer">
						{{ item.name }}
					</span>
				</li>

				<div class="bg-gradient-to-r from-green-light opacity-90 w-full h-0.5" />
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'ProductsNavBar',

	data() {
		return {
			navBarItems: [
				{
					name: 'Frutas',
					path: ''
				},
				{
					name: 'Legumes',
					path: ''
				},
				{
					name: 'Verduras',
					path: ''
				}
			]
		}
	}
}
</script>