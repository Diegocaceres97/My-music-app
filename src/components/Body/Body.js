import Header from "./Header"
import {BodyContainer, Info, InfoText, Songs, Icons} from "./Styles"
import {useSelector} from "react-redux"
import {selectPlaylist} from "../../features/PlaylistSlice"
import {selectITEMS} from "../../features/FavoriteSlice"
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled"
import FavoriteIcon from "@material-ui/icons/Favorite"
import MoreHorizonIcon from "@material-ui/icons/MoreHoriz"
import SongRow from "./SongRow"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
const Body = () => {
    const playlist = useSelector(selectPlaylist);
    const itemsFavorites = useSelector(selectITEMS);
    //const favoritos = useSelector(selectTopTracks);
    console.log("playlist => ", playlist)
    return (
        <Router>
        <BodyContainer>
            <Header />
            <Info>
                <Switch>
                    <Route path="/" exact>
                <img src={playlist?.images[0]?.url} alt=""/>
                <InfoText>
                    <h4>Playlist</h4>
                    <h2>Discover Weekly</h2>
                    <p>{playlist? playlist.name : "sin descripcion"}</p>
                </InfoText>
                 </Route>
                 <Route path="/favoritos">
                 <img src={itemsFavorites?.items[0].track.album.images[0]?.url} alt="favoriteAlbumIMG"/>
                <InfoText>
                    <h4>Favorites</h4>
                    <h2>FAVORITOS DE LA SEMANA</h2>
                    <p>Descubre lo mejor</p>
                </InfoText>
                 </Route>
                </Switch>
            </Info>
            <hr></hr>
            <Songs>
                <Icons>
                    <FavoriteIcon fontSize="large" />
                    <PlayCircleFilledIcon fontSize="large"/>
                    <MoreHorizonIcon fontSize="large" />
                </Icons>
                <Switch>
                <Route path="/" exact>
                {

                    playlist?.tracks?.items.map((item,index) => (
                        <SongRow track={item.track} key={index} />
                    ))

                }
                </Route>
                <Route path="/favoritos">
                {

                itemsFavorites?.items.map((item,index) => (
                 <SongRow track={item.track} key={index} />
                ))

                }
                </Route>
                
                </Switch>
            </Songs>
        </BodyContainer>
        </Router>
    )
}

export default Body
