import { useStaticQuery, graphql } from 'gatsby'

export const useAboutInfo = () => {
  const { allDatoCmsAboutInfo } = useStaticQuery(graphql`
    query {
      allDatoCmsAboutInfo(sort: { fields: position }) {
        items: nodes {
          text
          url
          aboutType
          file {
            url
          }
        }
      }
    }
  `)

  return allDatoCmsAboutInfo
}
