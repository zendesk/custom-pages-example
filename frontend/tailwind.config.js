module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		   fontFamily: {
      'sans': ['Poppins', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['IBM Plex Mono', 'SFMono-Regular']
    },
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
