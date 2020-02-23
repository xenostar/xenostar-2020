import { useStaticQuery, graphql } from 'gatsby'

export const useSocialInfo = () => {
  const { allDatoCmsSocialInfo } = useStaticQuery(graphql`
    query {
      allDatoCmsSocialInfo(sort: { fields: position }) {
        items: nodes {
          url
          profileType
        }
      }
    }
  `)

  return allDatoCmsSocialInfo
}
