import { useStaticQuery, graphql } from 'gatsby'

export const useSocialInfo = () => {
  const { allDatoCmsSocialInfo } = useStaticQuery(graphql`
    query {
      allDatoCmsSocialInfo(sort: { fields: position }) {
        nodes {
          url
          profileType
        }
      }
    }
  `)

  return allDatoCmsSocialInfo
}
