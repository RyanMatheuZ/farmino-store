<template>
	<header class="container mx-auto">
		<nav class="px-6 md:px-16">
			<ul class="flex items-center space-x-5">
				<li
					v-for="(item, index) of navBarItems"
					:key="index"
				>
					<RouterLink
						:to="{ name: `${item.path}`, params: { name: `${item.slug}` } }"
						class="text-black-100 hover:text-green-light text-lg font-semibold opacity-60 hover:opacity-100 duration-200 transition-opacity ease-in select-none cursor-pointer"
					>
						{{ item.name }}
					</RouterLink>
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
					path: 'Fruits',
					slug: 'fruits'
				},
				{
					name: 'Legumes',
					path: 'Vegetables',
					slug: 'vegetables'
				},
				{
					name: 'Verduras',
					path: 'Greens',
					slug: 'greens'
				}
			]
		}
	}
}
</script>