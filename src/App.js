import React from 'react';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { getTokenFromUrl } from './utils/spotifyHelper';
import { setAuth } from './redux/reducers/authSlice';

function App() {
  const {loading} = useSelector(state => state.loader);

  const dispatch = useDispatch();

  const [spotifytoken, setSpotifyToken] = React.useState("");

  React.useEffect(() => {
    const spotToken = getTokenFromUrl()['access_token'];

    window.location.hash = '';

    if(spotToken) {
      window.localStorage.setItem('spotify_token', spotToken);
      setSpotifyToken(spotToken);
      dispatch(setAuth(spotToken));
    }
  }, []);

  const logout = () => {
    setSpotifyToken('');
    dispatch(setAuth(''));
    window.localStorage.removeItem('spotify_token');
  };
  return (
    <>
      {loading && <p>Loading...</p>}
      {!spotifytoken ? <LoginPage /> : <HomePage handleLogout={logout} />}
    </>
  );
}

export default App;
