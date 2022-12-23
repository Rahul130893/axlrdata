import Axios from "axios";

export const LOGIN_REQ = "LOGIN_REQ";
export const LOGIN_SUCC = "LOGIN_SUCC";
export const LOGIN_FAIL = "LOGIN_FAIL";

const loginReq = () => {
  return {
    type: LOGIN_REQ,
  };
};
const loginSucc = (payload) => {
  return {
    type: LOGIN_SUCC,
    payload,
  };
};
const loginFail = (payload) => {
  return {
    type: LOGIN_FAIL,
    payload,
  };
};

const LogIn = (payload) => (dispatch) => {
  dispatch(loginReq());
  Axios.post("https://projects13.herokuapp.com/login", payload)
    .then((r) => dispatch(loginSucc(r.data.token)))
    .catch((e) => dispatch(loginFail(e.data)));
};

export default LogIn;
