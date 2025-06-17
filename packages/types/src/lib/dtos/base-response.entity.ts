export interface BaseResponseEntity<T> {
    data: T[],
    meta: {
      total: number,
      per_page: number,
      current_page: number,
      last_page: number,
      to: number
    }
}
