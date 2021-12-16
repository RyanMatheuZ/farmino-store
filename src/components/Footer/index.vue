<template>
	<footer class="bg-green-opaque rounded-3xl transform -skew-y-2 container mx-auto my-16 p-10 md:p-20">
		<div class="flex flex-col md:flex-row justify-evenly space-y-5 md:space-y-0 transform skew-y-2">
			<FooterLogo />

			<FooterPartners />

			<FooterSiteMap />

			<FooterContacts />
		</div>
	</footer>
</template>

<script>
const FooterLogo = () => import('./FooterLogo')
const FooterPartners = () => import('./FooterPartners')
const FooterSiteMap = () => import('./FooterSiteMap')
const FooterContacts = () => import('./FooterContacts')

export default {
	name: 'Footer',

	components: {
		FooterLogo,
		FooterPartners,
		FooterSiteMap,
		FooterContacts
	}
}
</script>