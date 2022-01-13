module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-inline-svg')({
      path: 'node_modules/@zendeskgarden/svg-icons/src',
    }),
    require('postcss-svgo'),
  ],
};
