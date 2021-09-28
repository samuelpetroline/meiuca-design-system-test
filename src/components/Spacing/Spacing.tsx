import React, { useMemo } from 'react'

import { View } from 'react-native'
import {
  spacingSizeGiant,
  spacingSizeHuge,
  spacingSizeLg,
  spacingSizeMd,
  spacingSizeNano,
  spacingSizeQuarck,
  spacingSizeSm,
  spacingSizeXl,
  spacingSizeXs,
  spacingSizeXxl,
  spacingSizeXxs,
  spacingSizeXxxl,
  spacingSizeXxxs,
} from 'theme'

type SpacingOptions =
  | 'quarck'
  | 'nano'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'huge'
  | 'giant'

type SpacingProps = {
  spacing: SpacingOptions
}

function getSpacing(spacing: SpacingOptions): number {
  if (spacing === 'quarck') return spacingSizeQuarck.number
  if (spacing === 'nano') return spacingSizeNano.number
  if (spacing === 'xxxs') return spacingSizeXxxs.number
  if (spacing === 'xxs') return spacingSizeXxs.number
  if (spacing === 'xs') return spacingSizeXs.number
  if (spacing === 'sm') return spacingSizeSm.number
  if (spacing === 'md') return spacingSizeMd.number
  if (spacing === 'lg') return spacingSizeLg.number
  if (spacing === 'xl') return spacingSizeXl.number
  if (spacing === 'xxl') return spacingSizeXxl.number
  if (spacing === 'xxxl') return spacingSizeXxxl.number
  if (spacing === 'huge') return spacingSizeHuge.number
  if (spacing === 'giant') return spacingSizeGiant.number

  throw new Error('Invalid spacing')
}

export default function Spacing(props: SpacingProps): JSX.Element {
  const style = useMemo(
    () => ({
      marginBottom: getSpacing(props.spacing),
    }),
    [props.spacing],
  )

  return <View style={style} />
}
