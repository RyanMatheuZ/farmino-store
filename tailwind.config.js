module.exports = {
	purge: [],

	darkMode: false, // or 'media' or 'class'

	theme: {
		extend: {
			backgroundImage: {
				'hero': "url('/img/main-image.jpg')",
			},

			colors: {
				black: {
					100: '#3D3D3D'
				},

				green: {
					opaque: '#E7EEC2',
					dark: '#05C46B',
					light: '#0BE881'
				},

				yellow: {
					medium: '#D68A00'
				}
			}
		}
	},

	variants: {
		extend: {}
	},

	plugins: []
}