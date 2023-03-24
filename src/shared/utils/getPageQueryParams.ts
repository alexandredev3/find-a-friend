export const getPageQueryParams = () => {
  const queryParams = window.location.search
  const urlQueryParams = new URLSearchParams(queryParams)

  return urlQueryParams
}
