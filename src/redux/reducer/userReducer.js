import { INCREMENT, DECREMENT } from "../action/counterAction";
const INITIAL_STATE = {
  account: {
    access_token: "",
    refresh_token: "",
    username: "",
    image: "",
    roles: "",
  },
  isAuthenticated: false,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_USER_LOGIN_SUCCESS":
      console.log("check action ", action);
      return {
        ...state,
        account: {
          access_token: action?.playload?.DT?.access_token,
          refresh_token: action?.playload?.DT?.refresh_token,
          username: action?.playload?.DT?.username,
          image: action?.playload?.DT?.image,
          roles: action?.playload?.DT?.roles,
        },
        isAuthenticated: true
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default userReducer;
