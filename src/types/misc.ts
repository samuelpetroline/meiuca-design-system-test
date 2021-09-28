import { ReactNode } from 'react'

export type ReactValidElement = Omit<ReactNode, 'undefined'> | null

export type ChildrenOnlyProps = {
  children: ReactValidElement
}

export type EmptyFunction = () => unknown

export type UnknownObject = Record<string, unknown>
