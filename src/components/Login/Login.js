import {Container, LoginButton} from "./Styles";
import { loginURL } from "../../SpotifyLogic";

const Login = () => {

    return (
        
            <Container>
               <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo"
               className="logo" />
               <LoginButton href={loginURL}> Login with Spotify</LoginButton>
            </Container>
       
    )
}

export default Login
