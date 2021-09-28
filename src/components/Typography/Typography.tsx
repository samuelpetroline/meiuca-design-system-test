import { TextProps } from 'react-native'

import styled from 'styled-components/native'
import {
  fontFamilyHighlight,
  fontSizeLg,
  fontSizeMd,
  fontSizeXs,
  fontWeightBold,
  fontWeightMedium,
  fontWeightRegular,
  lineHeightDistant,
  lineHeightMedium,
  neutralColor1,
  neutralColor2,
} from 'theme'

const BaseText = styled.Text<TextProps>`
  font-family: ${fontFamilyHighlight};
`

export const Heading = styled(BaseText)`
  font-size: ${fontSizeLg.number};
  /* line-height: ${lineHeightDistant}; */
  font-weight: ${fontWeightBold};
  color: ${neutralColor1};
`

export const Subtitle = styled(BaseText)`
  font-size: ${fontSizeMd.number};
  /* line-height: ${lineHeightMedium}; */
  font-weight: ${fontWeightMedium};
  color: ${neutralColor2};
`

export const Paragraph = styled(BaseText)`
  font-size: ${fontSizeXs.number};
  /* line-height: ${lineHeightDistant}; */
  font-weight: ${fontWeightRegular};
  color: ${neutralColor2};
`
