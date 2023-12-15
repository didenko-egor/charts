import 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    requiredAuth?: boolean;
  }
}
