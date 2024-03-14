import { clearUserToken, storeUserToken } from "../utils/storage";
import ApiService from '../services/ApiService';


export const loginSuccess = (credentials) => {
  return async (dispatch) => {
    try {
      let userData;
      if (credentials.token) {
        userData = { token: credentials.token };
      } else {
        const loginResponse = await ApiService.login(credentials.email, credentials.password);
        userData = { token: loginResponse.data.body.token };
        if (credentials.rememberMe) {
          storeUserToken(userData.token);
        }
      }

      dispatch({
        type: 'USER_LOGIN_SUCCESS',
        payload: userData,
      });

      if (credentials.navigate) {
        credentials.navigate('/user');
      }
    } catch (error) {
      dispatch(loginFailure(error.response.data.message || 'Échec de la connexion. Veuillez réessayer.'));
    }
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
