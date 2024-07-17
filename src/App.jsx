import './index.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import AboutPage from "./Pages/AboutPage.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import SigninPage from "./Pages/SigninPage.jsx";

function App() {

  return (
      <BrowserRouter>
              <Routes>
                  <Route path="/FirstReactProj" element={<LandingPage />}/>
                  <Route path="/FirstReactProj/about" element={<AboutPage />} />
                  <Route path="/FirstReactProj/login" element={<LoginPage />} />
                  <Route path="/FirstReactProj/signup" element={<SigninPage/>} />
              </Routes>
      </BrowserRouter>
  );

}

export default App
