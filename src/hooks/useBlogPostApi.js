import { useStaticQuery, graphql } from 'gatsby'

export const useBlogPostApi = () => {
  const { allDatoCmsBlogPost } = useStaticQuery(graphql`
    query {
      allDatoCmsBlogPost(sort: {fields: publishDate, order: DESC}) {
        items: nodes {
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
  `)

  return allDatoCmsBlogPost
}
