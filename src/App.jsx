import Header from './components/Header.jsx';
import Wallpaper from "./components/Wallpaper.jsx";
import './index.css';
import HighlightButton from "./components/HighlightButton.jsx";
import Padder from "./components/padder.jsx";

function App() {

  return (
      <div className="App">
          <Header className="header"/>
          <Wallpaper className="wallpaper"/>
          <div className="container">
              <HighlightButton text="Sign Up"/>
              <Padder/>
              <HighlightButton text="Log In"/>
          </div>
      </div>
  );

}

export default App
