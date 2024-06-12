import { toast } from "react-toastify";

let EmailRegx = /\S+@\S+\.\S+/;

class FormHelper {
  IsEmpty(value) {
    return value.length === 0;
  }

  IsEmail(value) {
    return !EmailRegx.test(value);
  }
  ErrorToast(msg) {
    toast.error(msg, {
      position: "bottom-right",
    });
  }
  SuccessToast(msg) {
    toast.success(msg, {
      position: "bottom-right",
    });
  }
  toNumber(value) {
    return parseFloat(value);
  }

  fixNumber(value) {
    if (value > 0) {
      return value;
    } else {
      return 0;
    }
  }
  getBase64(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });
  }

  setEmail(email) {
    sessionStorage.setItem("email", email);
  }

  getEmail() {
    return sessionStorage.getItem("email");
  }

  unAuthorize(code) {
    if (code === 401) {
      sessionStorage.clear();
      localStorage.clear();
      window.location.href = "/login";
    }
  }
}
export const {
  IsEmpty,
  IsEmail,
  ErrorToast,
  SuccessToast,
  getBase64,
  toNumber,
  fixNumber,
  setEmail,
  getEmail,
  unAuthorize,
} = new FormHelper();
