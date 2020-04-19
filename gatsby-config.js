/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */  
  siteMetadata: {
    title: `Martin Locklear`,
    siteUrl: `https://www.martinlocklear.com`,
    description: `Martin Locklear's Website`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Martin Locklear's Website`,
        short_name: `MartinLocklear.com`,
        description: `Just a show and tell site for Martin Locklear`,
        lang: `en`,
        icon: `static/public_web_assets/martin_profile_photo_senegal.jpg`
      },
    }
  ],
}
