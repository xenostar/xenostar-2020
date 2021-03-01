import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Chip, Row as Row_ } from 'components'
import { FaGithub } from 'react-icons/fa'

export const ProjectInfo = ({
  githubLink = null,
  link = null,
  tools = null
}) => (
  <StyledProjectInfo>
    <Row align="center" justify="flex-start">
      {link && <Chip href={link} text="View Project" />}
      {githubLink && (
        <Chip href={githubLink} icon={<FaGithub />} text="Github" />
      )}
      {tools && <Chip text={tools} />}
    </Row>
  </StyledProjectInfo>
)

ProjectInfo.propTypes = {
  githubLink: PropTypes.string,
  link: PropTypes.string,
  tools: PropTypes.string
}

const StyledProjectInfo = styled.div`
  display: flex;
  margin-top: ${props => props.theme.spacing.default};
  width: 100%;
`
const Row = styled(Row_)`
  margin-top: -${props => props.theme.spacing.tiny};
`
