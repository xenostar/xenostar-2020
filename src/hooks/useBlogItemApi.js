import { useStaticQuery, graphql } from 'gatsby'

export const useBlogItemApi = () => {
  const { allDatoCmsBlogItem } = useStaticQuery(graphql`
    query {
      allDatoCmsBlogItem(sort: {fields: publishDate, order: DESC}) {
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

  return allDatoCmsBlogItem
}
