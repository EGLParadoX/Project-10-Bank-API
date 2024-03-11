import { clearUserToken } from "../utils/storage";
import ApiService from '../services/ApiService';


export const loginSuccess = (userData) => {
  return {
    type: 'USER_LOGIN_SUCCESS',
    payload: userData,
  };
};

export const loginFailure = (error) => {
  return {
    type: 'USER_LOGIN_FAILURE',
    payload: error,
  };
};

export const updateUserProfile = (userData) => {
  return async (dispatch, getState) => {
    const { user } = getState();
    const { token } = user.userData;

    try {
      const updatedProfileResponse = await ApiService.updateUserProfile(token, userData);
      dispatch({
        type: 'USER_PROFILE_UPDATE_SUCCESS',
        payload: updatedProfileResponse.data.body,
      });
    } catch (error) {
      dispatch({
        type: 'USER_PROFILE_UPDATE_FAILURE',
        payload: error.message,
      });
    }
  };
};

export const logout = () => {
  clearUserToken();

  return {
    type: 'USER_LOGOUT',
  };
};
