import styled from 'styled-components/native'

import { borderSizeNone, borderSizeThin, neutralColor4, neutralColor5, spacingSizeLg } from 'theme'

export const ShapeContainer = styled.View`
  border-radius: ${borderSizeNone.number};
  padding: ${spacingSizeLg.number}px;
  border-width: ${borderSizeThin.number};
  border-color: ${neutralColor4};
  background-color: ${neutralColor5};
`
