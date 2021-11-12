<template>
	<div id="app" >
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
			// MetaTags
			{
				charset: 'utf-8'
			},
			{
				name: 'robots',
				content: 'index, follow'
			},
			{
				name: 'keywords',
				content: 'farmino, loja, e-commerce, produto, alimento, orgânico, saudável'
			},
			{ 
				name: 'generator', 
				content: 'Visual Studio Code' 
			},
			{ 
				name: 'format-detection', 
				content: 'telephone=no' 
			},
			{ 
				name: 'author', 
				content: 'Ryan Oliveira' 
			},
			{ 
				name: 'theme-color', 
				content: '#0BE881' 
			},

			// OpenGraph
     		{ 
				property: 'og:type', 
				content: 'Loja virtual, e-commerce' 
			},
      		{ 
				property: 'og:author', 
			  	content: 'Ryan Oliveira' 
			}
		]
	}
}
</script>