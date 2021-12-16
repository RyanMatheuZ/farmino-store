<template>
	<ul class="space-y-3">
		<li class="text-green-900 text-3xl font-bold">
			Farmino
		</li>

		<li>
			<p class="text-black-100">
				A Farmino é pra qualquer fome. <br>
				Peça onde estiver. <br>
				Os melhores alimentos estão aqui!
			</p>
		</li>

		<li class="flex space-x-3">
			<a
				v-for="(item, index) in socialNetworks"
				:key="index"
				:href="item.link"
				:title="item.desc"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					:src="require(`/public/icon/${item.icon}`)"
					:alt="item.desc"
					:title="item.desc"
					draggable="false"
					width="35"
				>
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'FooterLogo',

	data() {
		return {
			socialNetworks: [
				{
					link: 'https://www.facebook.com/',
					icon: 'facebook.svg',
					desc: 'Facebook'
				},
				{
					link: 'https://www.instagram.com/',
					icon: 'instagram.svg',
					desc: 'Instagram'
				},
				{
					link: 'https://twitter.com/',
					icon: 'twitter.svg',
					desc: 'Twitter'
				},
				{
					link: 'https://www.linkedin.com/',
					icon: 'linkedin.svg',
					desc: 'LinkedIn'
				}
			]
		}
	}
}
</script>