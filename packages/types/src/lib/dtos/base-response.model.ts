export interface BaseResponseModel<T> {
  data: T[];
  count: number;
  page: number;
}
