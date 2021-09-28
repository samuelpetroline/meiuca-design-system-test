import styled from 'styled-components/native'
import {
  borderSizeNone,
  brandColorPrimary3,
  fontFamilyHighlight,
  fontSizeSm,
  fontWeightMedium,
  neutralColor5,
  spacingSquishSizeXsStack,
} from 'theme'

export const ButtonComponent = styled.View`
  justify-content: center;
  align-items: center;
  font-size: ${fontSizeSm.number};
  border-radius: ${borderSizeNone.number};
  padding: ${spacingSquishSizeXsStack.number}px;
  background-color: ${brandColorPrimary3};
`

export const ButtonText = styled.Text`
  font-family: ${fontFamilyHighlight};
  font-weight: ${fontWeightMedium};
  color: ${neutralColor5};
`
