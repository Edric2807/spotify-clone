import React, { useEffect } from 'react';
import styled from 'styled-components';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      });
      
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists, 
        });
      });
    }
  }, [token, dispatch]);
  
  return (
    <AppContainer>
      {token ? ( <Player spotify={spotify} /> ) : ( <Login /> )}
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div``;