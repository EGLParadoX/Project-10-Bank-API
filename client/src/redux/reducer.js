const initialState = {
    isAuthenticated: false,
    userData: null,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          userData: action.payload,
        };
      case 'USER_LOGIN_FAILURE':
        return {
          ...state,
          isAuthenticated: false,
          error: action.payload,
        };
      case 'USER_LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          userData: null,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  