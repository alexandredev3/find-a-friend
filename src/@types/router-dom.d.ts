import 'react-router-dom'

declare module 'react-router-dom' {
  export declare function useLoaderData<T extends any = unknown>(): T
  export declare function useRouteLoaderData<T extends any = unknown>(
    routeId: string,
  ): T
  export declare function useActionData<T extends any = unknown>(): T
}
