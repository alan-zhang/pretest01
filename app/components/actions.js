import DataService from "../services";

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILED = "LOGIN_FAILED";
const INCREASE_STEP = "INCREASE_STEP";

const doLogin = (username, password) => {
  return async (dispatch) => {
    const service = new DataService();

    const result = await service.login(username, password);

    if (result.success) {
      return dispatch({
        type: LOGIN_SUCCESS,
        data: result.data
      });
    }

    return dispatch({
      type: LOGIN_FAILED,
      error: result.error
    });
  };
};

const increaseStep = (step) => {
  return (dispatch) => {
    dispatch({
      type: INCREASE_STEP,
      step
    });
  };
};

const saveSteps = (step) => {
  return async () => {
    var dataService = new DataService();

    await dataService.saveSteps(step);
  };
};

export { LOGIN_SUCCESS, LOGIN_FAILED, INCREASE_STEP, doLogin, increaseStep, saveSteps };