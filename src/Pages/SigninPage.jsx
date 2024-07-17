import Wallpaper from "../components/Wallpaper.jsx";
import Header from "../components/Header.jsx";
import SignupField from "../components/SignupField.jsx";


function SigninPage() {

    return (

        <div className="App">
            <Header className="header"/>
            <Wallpaper className="wallpaper"/>
            <div className="container">
                <SignupField/>
            </div>
        </div>
    );

}

export default SigninPage;
