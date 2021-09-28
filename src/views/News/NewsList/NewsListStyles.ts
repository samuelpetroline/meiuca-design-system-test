import styled from 'styled-components/native'

import { neutralColor1, spacingSizeSm, spacingSizeXxs } from 'theme'

export const NewsListContainer = styled.View`
  flex: 1;
  padding: ${spacingSizeXxs.number}px;
  background-color: ${neutralColor1};
`

export const NewsListSuccessItem = styled.View`
  margin-top: ${spacingSizeSm.number};
`
