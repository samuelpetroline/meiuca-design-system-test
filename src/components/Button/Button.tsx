import React from 'react'
import { TouchableOpacity } from 'react-native'

import { EmptyFunction } from 'types/misc'

import { ButtonComponent, ButtonText } from './ButtonStyles'

type ButtonProps = {
  children: React.ReactElement | string
  onPress: EmptyFunction
}

export default function Button(props: ButtonProps): JSX.Element {
  const { children, onPress } = props

  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonComponent>
        <ButtonText>{children}</ButtonText>
      </ButtonComponent>
    </TouchableOpacity>
  )
}
