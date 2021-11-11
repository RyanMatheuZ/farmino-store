<template>
	<div id="app">
		<Header />

    	<RouterView />

		<Footer />
  	</div>
</template>

<script>
const Header = () => import('./components/Header')
const Footer = () => import('./components/Footer')

export default {
	name: 'App',

	components: {
		Header,
		Footer
	},

	metaInfo: {
		htmlAttrs: {
			lang: 'pt-br'
		},

		meta: [
			{
				charset: 'utf-8'
			},
			{
				name: 'robots',
				content: 'index, follow'
			},
			{
				name: 'keywords',
				content: ''
			}
		]
	}
}
</script>