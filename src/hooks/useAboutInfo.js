import { useStaticQuery, graphql } from 'gatsby'

export const useAboutInfo = () => {
  const { allDatoCmsAboutInfo } = useStaticQuery(graphql`
    query {
      allDatoCmsAboutInfo(sort: { fields: position }) {
        items: nodes {
          backgroundColor {
            hex
          }
          text
          textColor {
            hex
          }
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
