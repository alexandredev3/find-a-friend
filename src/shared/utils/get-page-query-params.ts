export const getPageQueryParams = (
  url: string = window.location.toString(),
) => {
  const _url = new URL(url)
  const urlQueryParams = new URLSearchParams(_url.search)

  return urlQueryParams
}
