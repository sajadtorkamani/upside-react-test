import Swal, { SweetAlertOptions } from 'sweetalert2';

const defaultOptions: Partial<SweetAlertOptions> = {
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 7000
};

export const ToastSuccess = Swal.mixin({
  ...defaultOptions,
  icon: 'success'
});

export const ToastError = Swal.mixin({
  ...defaultOptions,
  icon: 'error'
});
