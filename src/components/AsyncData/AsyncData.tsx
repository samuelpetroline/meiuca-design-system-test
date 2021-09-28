import React, { useMemo } from 'react'

import { ChildrenOnlyProps, EmptyFunction } from 'types/misc'

import { AsyncDataContext, useAsyncDataContext, AsyncDataProps } from './AsyncDataContext'

function AsyncData(props: AsyncDataProps & ChildrenOnlyProps): JSX.Element {
  const { children, data, isLoading, isSuccess, isError, error } = props

  const value = useMemo(() => {
    return { data, isLoading, isSuccess, isError, error }
  }, [data, error, isError, isLoading, isSuccess])

  return <AsyncDataContext.Provider value={value}>{children}</AsyncDataContext.Provider>
}

type LoadingProps = {
  children: React.ReactElement
}

function Loading(props: LoadingProps): JSX.Element | null {
  const { isLoading } = useAsyncDataContext()

  return isLoading ? props.children : null
}

type ErrorProps = {
  children:
    | React.ReactNode
    | ((args: { error: any; retryQuery?: EmptyFunction }) => React.ReactNode)
}

function InnerError(props: ErrorProps): JSX.Element | null {
  const { isError, error, retry: retryQuery } = useAsyncDataContext()

  return isError
    ? typeof props.children === 'function'
      ? props.children({ error, retryQuery })
      : props.children
    : null
}

type EmptyProps = {
  children: React.ReactElement
  isEmpty?: (data: any) => boolean
}

const emptyComparer = data => !!data

function Empty(props: EmptyProps): JSX.Element | null {
  const { children, isEmpty = emptyComparer } = props

  const { isLoading, isSuccess, data } = useAsyncDataContext()

  return !isLoading && isSuccess && isEmpty(data) ? children : null
}

type SuccessProps = {
  children: JSX.Element | null | ((data) => React.ReactElement)
}

function Success(props: SuccessProps): JSX.Element | null {
  const { isSuccess, data } = useAsyncDataContext()

  return isSuccess
    ? typeof props.children === 'function'
      ? props.children(data)
      : props.children
    : null
}

AsyncData.Loading = Loading
AsyncData.Error = InnerError
AsyncData.Empty = Empty
AsyncData.Success = Success

export default AsyncData
