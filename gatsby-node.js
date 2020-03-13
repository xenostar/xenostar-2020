const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`./src/templates/Post.js`)
  const projectTemplate = path.resolve(`./src/templates/Project.js`)

  const result = await graphql(`
    {
      posts: allDatoCmsBlogPost(sort: {fields: publishDate, order: DESC}) {
        items: nodes {
          slug
        }
      }
      projects: allDatoCmsPortfolioItem(sort: {order: ASC, fields: position}, limit: 16) {
        items: nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create Blog Posts
  result.data.posts.items.map(data => {
    createPage({
      path: `blog/${data.slug}`,
      component: postTemplate,
      context: {
        // data: data,
        slug: data.slug,
      },
    })
  })

  // Create Portfolio Projects
  result.data.projects.items.map(data => {
    createPage({
      path: `portfolio/${data.slug}`,
      component: projectTemplate,
      context: {
        slug: data.slug,
      },
    })
  })
}
