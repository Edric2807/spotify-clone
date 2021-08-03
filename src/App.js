import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import Player from "./components/Player";
import { getTokenFromResponse } from "./spotify";
import Login from "./components/Login";
import styled from "styled-components";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token, id }, dispatch] = useStateValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      //TODO: Replace hardcoed ID with actual API code. Fix the bug. "0ms9VMingcmKXMuczPfIdS"🔥
      spotify.getPlaylist("0ms9VMingcmKXMuczPfIdS").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <AppContainer>
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </AppContainer>
  );
}

const AppContainer = styled.div``;

export default App;

// import React, { useEffect } from 'react';
// import styled from 'styled-components';
// import Login from './components/Login';
// import Player from './components/Player';
// import SpotifyWebApi from 'spotify-web-api-js';
// import { getTokenFromUrl } from './spotify';
// import { useStateValue } from './StateProvider';

// const spotify = new SpotifyWebApi();

// function App() {
//   const [{ token }, dispatch] = useStateValue();

// useEffect(() => {
//     const hash = getTokenFromUrl();
//     window.location.hash = "";
//     const _token = hash.access_token;

//     if (_token) {
//       dispatch({
//         type: "SET_TOKEN",
//         token: _token
//       });
      
//       spotify.setAccessToken(_token);
//       spotify.getMe().then((user) => {
//         dispatch({
//           type: "SET_USER",
//           user: user,
//         });
//       });
      
//       spotify.getUserPlaylists().then((playlists) => {
//         dispatch({
//           type: "SET_PLAYLISTS",
//           playlists: playlists, 
//         });
//       });
//     }
//   }, [token, dispatch]);
  
//   return (
//     <AppContainer>
//       {token ? ( <Player spotify={spotify} /> ) : ( <Login /> )}
//     </AppContainer>
//   );
// }

// export default App;

// const AppContainer = styled.div``;