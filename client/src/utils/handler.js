import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import { loginSuccess, loginFailure } from '../redux/actions';
import { storeUserToken } from '../utils/storage'; 
import ApiService from '../services/ApiService';

export const useLogoutHandler = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (event) => {
        console.log("Début de la déconnexion");
        event.preventDefault();
        dispatch(logout());
        console.log("Déconnexion dispatchée");
        navigate('/');
    };
};


export const handleSubmit = async (e, dispatch, navigate, setError) => {
    e.preventDefault();
    const email = e.target.username.value;
    const password = e.target.password.value;
    const rememberMe = e.target['remember-me'].checked;
  
    try {
      const loginResponse = await ApiService.login(email, password);
      const userData = {
        token: loginResponse.data.body.token,
      };
  
      if (rememberMe) {
        storeUserToken(userData.token);
        console.log('Token sauvegardé dans le stockage local :', userData.token);
      }
  
      dispatch(loginSuccess(userData));
      navigate('/user');
    } catch (error) {
      setError(error.response.data.message || 'Échec de la connexion. Veuillez réessayer.');
      dispatch(loginFailure(error.response.data));
    }
  };