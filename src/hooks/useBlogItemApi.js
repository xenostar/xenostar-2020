import { useStaticQuery, graphql } from 'gatsby'

export const useBlogItemApi = () => {
  const { allDatoCmsBlogItem } = useStaticQuery(graphql`
    query {
      allDatoCmsBlogItem {
        items: nodes {
          title
          slug
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
