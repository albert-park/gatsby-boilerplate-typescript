module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-react-css-modules',
      options: {
        // *.css files are included by default.
        // To support another syntax (e.g. SCSS),
        // add `postcss-scss` to your project's devDependencies
        // and add the following option here:
        filetypes: {
          '.scss': { syntax: 'postcss-scss' }
        },

        // Exclude global styles from the plugin using a RegExp:
        exclude: '\/global\/'
      }
    },
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [],
        precision: 8, // SASS default: 5
      },
    },
    {
      resolve: 'gatsby-plugin-typescript-css-modules',
      options: {
        modules: true,
        namedExport: true,
      },
    }
  ],
}
