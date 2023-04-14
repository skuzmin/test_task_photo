export enum ToastTypes {
  Error = 'error',
  Success = 'success'
}

export const TOAST_TITLES: { [key in ToastTypes]: string } = {
  error: 'Error',
  success: 'Success'
};

export const TOAST_DURATION = 3 * 1000;
