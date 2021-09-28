import React from 'react'

import { ShapeContainer } from './ShapeStyles'

type ShapeProps = {
  children: Omit<React.ReactNode, 'undefined'>
}

export default function Shape(props: ShapeProps): JSX.Element {
  return <ShapeContainer>{props.children}</ShapeContainer>
}
