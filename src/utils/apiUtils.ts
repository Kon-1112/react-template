/**
 * ApiUtils.ts
 * @author souta.konno
 */
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

/**
 * APIのレスポンスデータ型
 * @property data レスポンスデータ
 * @property message レスポンスメッセージ
 * @example {data: {id: 1, name: 'John Doe'}, message: 'success'}
 */
interface ResponseData<T> {
  data: T;
  message: string;
}

/**
 * APIのエラーレスポンスデータ型
 * @property message エラーメッセージ
 * @property status ステータスコード
 * @example {message: 'ユーザーが見つかりませんでした。', status: 404}
 */
interface ApiResponseError {
  message: string;
  status: number;
}

/**
 * POSTする際のパラメータ型
 * @property key パラメータ名
 * @example {key: 'name', value: 'John Doe'}
 */
type PostParams = {
  [key: string]: any;
}

/**
 * 接続成功時のコールバック関数型
 * @param data レスポンスデータ
 * @example (data) => {console.log(data)}
 */
type SuccessCallback<T> = (data: T) => void;

/**
 * 接続失敗時のコールバック関数型
 * @param error エラーレスポンスデータ
 * @example (error) => {console.log(error)}
 * @example (error) => {alert(error.message)}
 */
type ErrorCallback = (error: ApiResponseError) => void;

/**
 * APIリクエストを送信する
 * @param config axiosのconfigオブジェクト
 * @param onSuccess 成功時のコールバック関数
 * @param onError 失敗時のコールバック関数
 * @param postData POSTする際のパラメータ
 */
async function request<T>(
  config: AxiosRequestConfig,
  onSuccess: SuccessCallback<T>,
  onError: ErrorCallback,
  postData?: PostParams
): Promise<void> {
  try {
    const requestConfig: AxiosRequestConfig = postData ? { ...config, data: postData } : config;
    const response: AxiosResponse<ResponseData<T>> = await axios(requestConfig);
    onSuccess(response.data.data);
  } catch (error: unknown) {
    const axiosError: AxiosError<ResponseData<T>> = error as AxiosError<ResponseData<T>>;
    if (axiosError.response) {
      const { status, data }: AxiosResponse<ResponseData<T>> = axiosError.response;
      const errorData: ApiResponseError = {
        status,
        message: data.message || '通信エラーが発生しました。',
      };
      onError(errorData);
    } else {
      const errorData: ApiResponseError = {
        status: 500,
        message: '通信エラーが発生しました。',
      };
      onError(errorData);
    }
  }
}
