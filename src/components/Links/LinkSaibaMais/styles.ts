import styled from 'styled-components'
// import { Link } from 'react-router-dom'
// import { colors as cor } from '../../../variaveis'
import { MixinLinks } from '../../../styles'
import { breakpoints } from '../../../variaveis'

export const StyleLink = styled(MixinLinks)`
  font-size: 14px;
  line-height: 16px;
  width: 80px;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 8px;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 72px;
    margin-bottom: 8px;
    margin-left: 8px;
    position: relative;
  }
`
