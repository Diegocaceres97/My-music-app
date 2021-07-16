import React from 'react'
import {SidebarContainer, PlayList} from './Styles'
import SidebarChoice from './SidebarChoice'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import FavoriteIcon from "@material-ui/icons/Favorite"

const Sidebar = () => {
    return (
        <SidebarContainer>
            <a href="http://localhost:3000/">
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" 
             alt="logo"/></a>
            <SidebarChoice title="Home" Icon={HomeIcon}/>
            <SidebarChoice title="Search" Icon={SearchIcon}/>
            <SidebarChoice title="Library" Icon={LibraryMusicIcon}/>
            <a href="http://localhost:3000/favoritos"><SidebarChoice title="Favoritos" Icon={FavoriteIcon} /></a>
            <PlayList>PLAYLIST</PlayList>
            <hr/>
            <SidebarChoice title="2021 chillout music" />
            <SidebarChoice title="Dark metal" />
        </SidebarContainer>
    )
}

export default Sidebar