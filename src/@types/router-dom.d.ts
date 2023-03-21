import 'react-router-dom'

declare module 'react-router-dom' {
  export declare function useLoaderData<T extends any = unknown>(): T
}
