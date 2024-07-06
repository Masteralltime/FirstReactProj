import './index.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import AboutPage from "./AboutPage.jsx";
import HomePage from "./HomePage.jsx";

function App() {

  return (
      <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<HomePage />}/>
                  <Route path="/about" element={<AboutPage />} />
              </Routes>
      </BrowserRouter>
  );

}

export default App
