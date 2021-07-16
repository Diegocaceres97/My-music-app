import {HeaderContainer, HeaderLeft, HeaderRight} from './Styles'
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/UserSlice";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const Header = () => {
   
    const user = useSelector(selectUser)

    const cerrarSession = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
console.log("esto"+user);
    return (
        
        <HeaderContainer>
            <HeaderLeft> 
                <SearchIcon />
                <input type="text" placeholder="Search for artist, songs or other" />
            </HeaderLeft>
            <HeaderRight>
                <Avatar src={user?.images[0].url}/>
                <h4>{user.display_name}</h4>
                <ExitToAppIcon onClick={cerrarSession} className="Logout"/>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header
