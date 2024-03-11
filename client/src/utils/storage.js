export const storeUserToken = (token) => {
    try {
      localStorage.setItem('userToken', token);
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement du token utilisateur dans le localStorage:', error);
    }
  };
  
  export const getUserToken = () => {
    try {
      return localStorage.getItem('userToken');
    } catch (error) {
      console.error('Erreur lors de la récupération du token utilisateur du localStorage:', error);
      return null;
    }
  };
  
  export const clearUserToken = () => {
    try {
      localStorage.removeItem('userToken');
    } catch (error) {
      console.error('Erreur lors de l\'effacement du token utilisateur du localStorage:', error);
    }
  };
  