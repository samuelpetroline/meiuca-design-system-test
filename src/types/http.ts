import { AxiosRequestConfig } from 'axios'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface RequestConfig extends AxiosRequestConfig {
  headers?: Header
  skipValidation?: boolean
}

export interface Header {
  'Content-Type'?: string
  token?: string
  Authorization?: string
}

export interface HttpResult<T> {
  data: T
  status: number
}

export interface HttpError {
  errors: Array<{ messageError: string }>
  status: number
  isUserError: boolean
}
