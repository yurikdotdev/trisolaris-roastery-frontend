import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function showToastMessage(message: string, mode: string) {
  if (mode === 'error') {
    toast.error(message, {
      position: 'top-center',
      theme: 'colored',
    });
  }

  if (mode === 'success') {
    toast.success(message, {
      position: 'top-center',
      theme: 'colored',
    });
  }

  if (mode === 'info') {
    toast.info(message, {
      position: 'top-center',
      theme: 'colored',
    });
  }
};
