const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsBlogPost(sort: {fields: publishDate, order: DESC}) {
          nodes {
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY", locale: "en")
            body
            excerpt
            tags
            categories
            seo {
              title
              description
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsBlogPost.nodes.map(data => {
        createPage({
          path: `blog/${data.slug}`,
          component: path.resolve(`./src/templates/Post.js`),
          context: {
            slug: data.slug,
            data: data,
          },
        })
      })
      resolve()
    })
  })
}

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     graphql(`
//       {
//         allDatoCmsWork {
//           edges {
//             node {
//               slug
//             }
//           }
//         }
//       }
//     `).then(result => {
//       result.data.allDatoCmsWork.edges.map(({ node: work }) => {
//         createPage({
//           path: `works/${work.slug}`,
//           component: path.resolve(`./src/templates/work.js`),
//           context: {
//             slug: work.slug,
//           },
//         })
//       })
//       resolve()
//     })
//   })
// }
