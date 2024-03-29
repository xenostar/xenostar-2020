import styled from 'styled-components'
import { SocialIcon as SocialIcon_ } from 'components'
import { useSocialInfo } from 'hooks'

export const Social = props => {
  const { items } = useSocialInfo()

  return (
    <StyledSocial {...props}>
      {items.map((data, i) => (
        <SocialIcon key={i} href={data.url} icon={data.socialType} />
      ))}
    </StyledSocial>
  )
}

const StyledSocial = styled.div`
  display: inline-flex;
`
const SocialIcon = styled(SocialIcon_)`
  margin-left: ${({ theme }) => theme.spacing.default};
  :first-child {
    margin-left: 0;
  }
`
