import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../redux/actions';

export const useLogoutHandler = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (event) => {
        event.preventDefault();
        dispatch(logout());
        navigate('/');
    };
};


export const handleSubmit = (e, dispatch, navigate) => {
  e.preventDefault();
  const email = e.target.username.value;
  const password = e.target.password.value;
  const rememberMe = e.target['remember-me'].checked;

  dispatch(loginSuccess({ email, password, rememberMe, navigate }));
};

