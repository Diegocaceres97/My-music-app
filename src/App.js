import { useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login'
import { getTokenFromURL } from "./SpotifyLogic";
import {SET_USER, selectUser} from "./features/UserSlice";
import Player from './components/Player/Player';
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import { SET_TOKEN } from './features/TokenSlice';
import { SET_ITEMS } from './features/FavoriteSlice';
import { SET_PLAYLIST } from './features/PlaylistSlice';

const spotify = new SpotifyWebApi();

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
useEffect(() => {
  if(window.location.hash !== ""){

  if(!localStorage.getItem('token')){
    const hash = getTokenFromURL(); //Aqui obtenemos un token
    localStorage.setItem('token',hash.access_token);
    window.location.hash="";
    window.location="";
  }
  }
  const _token = localStorage.getItem('token');
  
  if(_token){
    dispatch(SET_TOKEN(_token))

    spotify.setAccessToken(_token);

    spotify.getMe().then(user => dispatch(SET_USER(user)))

    spotify.getPlaylist("1hX0yEOMQE9v2G8xt3hp7w").then(playlist=>
      dispatch(SET_PLAYLIST(playlist)));

      
      spotify.getMySavedTracks({
        Authorization: _token
      })
      .then(function(data) {
        console.log('Done!', data);
        dispatch(SET_ITEMS(data))
      }, function(err) {
        console.log('Something went wrong!', err);
      });
     
       
    
  }
  

},[dispatch])
  return (
    <div >
     {
       user ? <Player/> : <Login/>
     }
   
    </div>
  );
}

export default App;
