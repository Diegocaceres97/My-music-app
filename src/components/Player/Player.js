import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import { SpotifyBody } from './Styles'
import { createBrowserHistory } from "history";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
const Player = () => { 
    const history = createBrowserHistory()
    return (
        <>      
        <SpotifyBody>
            <Sidebar/>             
                    <Body/>   
        </SpotifyBody>
            <Footer />
           
        </>
        
    )
}

export default Player