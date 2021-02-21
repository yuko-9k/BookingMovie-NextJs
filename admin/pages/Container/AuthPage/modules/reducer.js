import * as Actiontypes from "./constant";

const inittialState = {
  loading: false,
  data: null,
  err: null,
};

const userLoginReducer = (state = inittialState, action) => {
  switch (action.type) {
    case Actiontypes.USERLOGIN_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case Actiontypes.USERLOGIN_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case Actiontypes.USERLOGIN_FAIL:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default userLoginReducer;
