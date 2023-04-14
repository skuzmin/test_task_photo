import { ToastTypes } from './toast.constant';

export interface ToastPayload {
  type: ToastTypes;
  text: string;
}
