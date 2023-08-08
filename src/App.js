import React from 'react';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { getTokenFromUrl } from './utils/spotifyHelper';
import { resetAuth, setAuth } from './redux/reducers/authSlice';

function App() {
  const {loading} = useSelector(state => state.loader);
  const {token} = useSelector(state => state.auth);
  
  const dispatch = useDispatch();

  React.useEffect(() => {
    const spotToken = getTokenFromUrl()['access_token'];

    window.location.hash = '';

    if(spotToken) {
      window.localStorage.setItem('spotify_token', spotToken);
      dispatch(setAuth(spotToken));
    }
  }, []);

  const logout = () => {
    dispatch(resetAuth());
    window.localStorage.removeItem('spotify_token');
  };
  return (
    <>
      {loading && <p>Loading...</p>}
      {!token ? <LoginPage /> : <HomePage handleLogout={logout} />}
    </>
  );
}

export default App;
