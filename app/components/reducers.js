import { LOGIN_SUCCESS, LOGIN_FAILED, INCREASE_STEP } from "./actions";

const data = (state, action) => {
  switch (action.type) {
      case LOGIN_SUCCESS:
        return Object.assign({}, state, {user: action.data});
      case LOGIN_FAILED:
        return Object.assign({}, state, {errorMsg: action.error.message});
      case INCREASE_STEP:
        return Object.assign({}, state, {dashboard: {currentSteps: action.step}});
      default:
        return {user: null, dashboard: {}, errorMsg: ""};
  }
};

export default data;