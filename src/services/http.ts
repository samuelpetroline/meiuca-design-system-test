import axios from 'axios'

import { HttpError, HttpMethod, HttpResult, RequestConfig } from 'types/http'

const httpClient = axios.create()

async function send<T>(
  method: HttpMethod,
  url: string,
  data?: unknown,
  config?: RequestConfig,
): Promise<HttpResult<T>> {
  try {
    const request = {
      url,
      method,
      data,
      timeout: 60000,
      ...config,
    }

    const response = await httpClient(request)

    return {
      data: response.data,
      status: response.status,
    } as HttpResult<T>
  } catch (error) {
    if (error.response) {
      // Resposta do backend (qualquer status fora do range 2xx)

      throw {
        errors: error.response.data,
        status: error.response.status,
        isUserError: error.response.status >= 400 && error.response.status < 500,
      } as HttpError
    } else if (error.request) {
      // Request não foi respondido ou nem chegou ao server (por padrão considera-se que o usuário está sem internet)

      throw {
        errors: [],
        status: error.request.status,
        isUserError: false,
      } as HttpError
    }

    throw {
      errors: [error.message],
    } as HttpError
  }
}

function get<T>(url: string, config?: RequestConfig): Promise<HttpResult<T>> {
  return send<T>('GET', url, undefined, config)
}

function post<T>(url: string, data?: unknown, config?: RequestConfig): Promise<HttpResult<T>> {
  return send<T>('POST', url, data, config)
}

function put<T>(url: string, data?: unknown, config?: RequestConfig): Promise<HttpResult<T>> {
  return send<T>('PUT', url, data, config)
}

function remove<T>(url: string, data?: unknown, config?: RequestConfig): Promise<HttpResult<T>> {
  return send<T>('DELETE', url, data, config)
}

export { get, post, put, remove }
