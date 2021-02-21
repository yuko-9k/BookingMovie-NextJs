import * as ActionTypes from "./constant";
import api from "../../../api/index";

export const actUserLoginCallApi = (user) => {
  return (dispatch) => {
    dispatch(actUserLoginRequest());
    api
      .post(`/QuanLyNguoiDung/DangNhap`, user)
      .then((result) => {
        dispatch(actUserLoginSuccess(result));
      })
      .catch((err) => {
        dispatch(actUserLoginFail(err.response));
      });
  };
};
const actUserLoginRequest = () => {
  return {
    type: ActionTypes.USERLOGIN_REQUEST,
  };
};

const actUserLoginSuccess = (data) => {
  return {
    type: ActionTypes.USERLOGIN_SUCCESS,
    payload: data,
  };
};

const actUserLoginFail = (err) => {
  return {
    type: ActionTypes.USERLOGIN_FAIL,
    payload: err,
  };
};
