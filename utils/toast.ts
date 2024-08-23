import { toast, type ToastOptions } from "react-toastify";

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Toastify {
  static success(message: string, options?: ToastOptions) {
    return toast.success(message, {
      ...options,
      style: {
        background: "green",
        color: "white",
        fontSize: "14px",
      },
      className: "toast",
    });
  }

  static error(message: string, options?: ToastOptions) {
    return toast.error(message, {
      ...options,
      style: {
        color: "black",
        height: "40px",
        width: "350px",
        marginTop: "20px",
      },
      toastId: "okra-toast",
      className: "toast",
    });
  }
}
