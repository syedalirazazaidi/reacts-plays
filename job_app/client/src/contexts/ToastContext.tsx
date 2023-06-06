import React, { createContext } from "react";
import { toast, ToastContainer } from "react-toastify";
interface ToastProviderProps {
  children: React.ReactNode;
}
// Create the ToastContext
export const ToastContext = createContext({});

// Create the ToastProvider
export const ToastProvider = ({ children }: ToastProviderProps) => {
  // Helper function to display toast notifications

  const showToast = (message: any, type: any) => {
    console.log(message);
    if (type === "success") {
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (type === "error") {
      //   toast.error(message);
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (type === "warning") {
      toast.warn(message, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast(message);
    }
  };

  // Value object for the context
  const value = {
    showToast,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      {/* <ToastContainer /> */}
    </ToastContext.Provider>
  );
};
