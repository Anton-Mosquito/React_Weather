export type AsyncStatus = 'idle' | 'pending' | 'succeeded' | 'failed';

export interface ApiError {
  code?: string | number;
  message: string;
  meta?: unknown;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  headers?: Record<string, string>;
  raw?: unknown;
}

export type RtkQueryResult<T, E = ApiError> = {
  data?: T;
  error?: E;
  isLoading: boolean;
  isFetching?: boolean;
  isError: boolean;
  isSuccess: boolean;
};

export type MapperFn<A, B> = (a: A) => B;
