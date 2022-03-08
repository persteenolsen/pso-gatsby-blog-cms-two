/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `A Blog full of Web Projects`,
        description: `The list of Projects`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`,
            },
        },
		{
           resolve: `gatsby-source-filesystem`,
           options: {
           path: `${__dirname}/content/blog`,
           name: `blog`,
           },
        },
        {
        resolve: `gatsby-source-filesystem`,
          options: {
          path: `${__dirname}/content/assets`,
          name: `assets`,
        },
       },
	   
	   `gatsby-plugin-react-helmet`,
    ],
}
