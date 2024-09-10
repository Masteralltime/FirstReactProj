import './index.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AttendancePage from "./pages/AttendancePage.jsx";

function App() {

  return (
      <BrowserRouter>
              <Routes>
                  <Route path="/FirstReactProj" element={<LandingPage />}/>
                  <Route path="/FirstReactProj/home" element={<HomePage />} />
                  <Route path="/FirstReactProj/about" element={<AboutPage />} />
                  <Route path="/FirstReactProj/login" element={<LoginPage />} />
                  <Route path="/FirstReactProj/signup" element={<SignupPage/>} />
                  <Route path="/FirstReactProj/attendance" element={<AttendancePage />} />
              </Routes>
      </BrowserRouter>
  );

}

export default App
