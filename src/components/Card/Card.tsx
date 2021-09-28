import React from 'react'

import { EmptyFunction } from 'types/misc'

import Button from 'components/Button'
import Shape from 'components/Shape'
import Spacing from 'components/Spacing'
import { Heading, Paragraph, Subtitle } from 'components/Typography'

type CardProps = {
  title: string
  subtitle?: string
  description?: string
  onPress: EmptyFunction
}

export default function Card(props: CardProps): JSX.Element {
  return (
    <Shape>
      <Heading>{props.title}</Heading>
      <Spacing spacing='xxxs' />

      <Subtitle>{props.subtitle}</Subtitle>
      <Spacing spacing='xxs' />

      <Paragraph>{props.description}</Paragraph>
      <Spacing spacing='sm' />

      <Button onPress={props.onPress}>Ver notícia</Button>
    </Shape>
  )
}
