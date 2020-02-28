const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allDatoCmsBlogPost(sort: {fields: publishDate, order: DESC}) {
        nodes {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY", locale: "en")
          body
          excerpt
          categories
          seo {
            title
            description
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allDatoCmsBlogPost.nodes.map(data => {
    createPage({
      path: `blog/${data.slug}`,
      component: path.resolve(`./src/templates/Post.js`),
      context: {
        data: data,
      },
    })
  })
}
