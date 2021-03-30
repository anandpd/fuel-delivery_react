import { toast } from "react-toastify";
import { TOAST } from "./constant";

// Toast function
export const showToast = (msg, type = TOAST.SUCCESS) => {
  if (type === TOAST.DEFAULT) return toast(msg);
  return toast[type](msg);
};
