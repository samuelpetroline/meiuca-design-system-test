import React from 'react'

import { EmptyFunction } from 'types/misc'

export type AsyncDataProps<T = any, U = unknown> = {
  data: T
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  error: U
  retry?: EmptyFunction
}

export const AsyncDataContext = React.createContext<AsyncDataProps | undefined>(undefined)

export const useAsyncDataContext = () => {
  const context = React.useContext(AsyncDataContext)

  if (!context) {
    throw new Error(
      'AsyncData compound components cannot be rendered outside the AsyncData component',
    )
  }

  return context
}
