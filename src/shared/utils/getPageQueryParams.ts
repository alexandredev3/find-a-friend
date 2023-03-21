export const getPageQueryParams = <T extends Record<string, string>>() => {
  const queryParams = window.location.search
  const urlQueryParams = new URLSearchParams(queryParams)

  const get = (name: keyof T) => {
    return urlQueryParams.get(name as string)
  }

  return {
    ...urlQueryParams,
    get,
  }
}
