import * as ActionTypes from "./constant";
import api from "../../../api/index";

export const actRegisterUser = (data) => {
  return (dispatch) => {
    dispatch(actRegisterUserRequest());
    api
      .post(`/QuanLyNguoiDung/DangKy`, data)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

const actRegisterUserRequest = () => {
  return {
    type: ActionTypes.registerUser_REQUEST,
  };
};
const actRegisterUserSuccess = (data) => {
  return {
    type: ActionTypes.registerUser_SUCCESS,
    payload: data,
  };
};
const actRegisterUserFail = (err) => {
  return {
    type: ActionTypes.registerUser_FAIL,
    payload: err,
  };
};
