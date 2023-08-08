import React from 'react';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { getTokenFromUrl } from './utils/spotifyHelper';
import { resetAuth, setAuth } from './redux/reducers/authSlice';
import { resetAlert } from './redux/reducers/alertSlice';
import AlertBanner from './components/Alerts';
import { resetTracks } from './redux/reducers/trackSlice';

function App() {
  const { loading } = useSelector(state => state.loader);
  const { token } = useSelector(state => state.auth);
  const { open, message } = useSelector(state => state.alert);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const spotToken = getTokenFromUrl()['access_token'];

    window.location.hash = '';

    if (spotToken) {
      window.localStorage.setItem('spotify_token', spotToken);
      dispatch(setAuth(spotToken));
    }
  }, []);

  const logout = () => {
    dispatch(resetAuth());
    dispatch(resetTracks());
    window.localStorage.removeItem('spotify_token');
  };

  const handleAlertClose = () => {
    dispatch(resetAlert());
  };

  return (
    <>
      <AlertBanner open={open} message={message} handleClose={handleAlertClose} />
      {loading && <p>Loading...</p>}
      {!token ? <LoginPage /> : <HomePage handleLogout={logout} />}
    </>
  );
}

export default App;
