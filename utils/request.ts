import { hash } from "ohash"

interface HttpResponse<T> {
  code: number
  data?: T
  message: string
}

function configOptions(options: any = {}) {
  options.headers = { accessToken: getToken() }
  return options
}

const fetch = (url: string, options?: object): Promise<any> => {
  const {
    public: { baseUrl },
  } = useRuntimeConfig()

  const _baseUrl = baseUrl
  const reqUrl = _baseUrl + url
  const key = hash(JSON.stringify(options) + url)
  const _options = configOptions(options)

  return new Promise((resolve, reject) => {
    $fetch(reqUrl, { ..._options, key })
      .then((result) => {
        resolve(result)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}

export default new (class Http {
  get<T = any>(url: string, params?: object): Promise<HttpResponse<T>> {
    return fetch(url, { method: "get", params })
  }

  post<T = any>(url: string, body?: object): Promise<HttpResponse<T>> {
    return fetch(url, { method: "post", body })
  }

  put<T = any>(url: string, body?: object): Promise<HttpResponse<T>> {
    return fetch(url, { method: "put", body })
  }

  delete<T = any>(url: string, body?: object): Promise<HttpResponse<T>> {
    return fetch(url, { method: "delete", body })
  }
})()

export const setToken = (token: string) => {
  return window.localStorage.setItem("accessToken", token)
}

export const getToken = () => {
  return window.localStorage.getItem("accessToken")
}

export const removeToken = () => {
  return window.localStorage.removeItem("accessToken")
}
