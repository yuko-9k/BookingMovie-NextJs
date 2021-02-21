import * as yup from "yup";

export const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .matches(/^[a-zA-Z0-9]*$/, "Tên tài khoản không bao gồm kí tự đặc biệt")
    .required("Tên tài khoản không được để trống"),
  matKhau: yup
    .string()
    .matches(/^[a-zA-Z0-9]*$/, "Mật khẩu không bao gồm kí tự đặc biệt")
    .required("Mật khẩu không được để trống"),
  email: yup
    .string()
    .email("Không đúng định dạng Email")
    .required("Email không được để trống"),
  soDt: yup
    .string()
    .matches(
      /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
      "Số điện thoại bao gồm 10 chữ số"
    )
    .required("Vui lòng nhập số điện thoại"),
  hoTen: yup
    .string()
    .matches(/^[a-zA-Z\s]*$/, "Họ Và Tên không bao gồm kí tự đặc biệt")
    .required("Họ và tên không được để trống"),
});
