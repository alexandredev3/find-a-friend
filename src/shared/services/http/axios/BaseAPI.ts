import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { API_HOST } from '../../../constants/api-host'

export abstract class BaseAPI {
  private axiosInstance: AxiosInstance
  protected path: string

  constructor(path: string) {
    this.path = path
    this.axiosInstance = axios.create({
      baseURL: API_HOST,
    })
  }

  protected post<
    TRequestData extends any = unknown,
    TRequestConfig extends AxiosRequestConfig<any> = AxiosRequestConfig<unknown>,
    TRequestResponse extends AxiosResponse<any> = AxiosResponse<unknown>,
  >(url: string, data?: TRequestData, config?: TRequestConfig) {
    return this.axiosInstance.post<TRequestResponse>(
      this.path + url,
      data,
      config,
    )
  }

  protected get<
    TRequestResponse extends any = unknown,
    TRequestConfig extends any = unknown,
  >(url: string, config?: AxiosRequestConfig<TRequestConfig>) {
    return this.axiosInstance.get<TRequestResponse>(this.path + url, config)
  }
}
