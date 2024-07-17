import Wallpaper from "../components/Wallpaper.jsx";
import Header from "../components/Header.jsx";
import LoginField from "../components/LoginField.jsx";


function LoginPage() {

    return (

        <div className="App">
            <Header className="header"/>
            <Wallpaper className="wallpaper"/>
            <div className="container">
                <LoginField/>
            </div>
        </div>
    );

}

export default LoginPage;
