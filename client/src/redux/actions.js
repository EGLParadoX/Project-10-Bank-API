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
  
  export const logout = () => {
    return {
      type: 'USER_LOGOUT', 
    };
  };
  