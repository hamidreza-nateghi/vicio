import "./App.css";
import BottomBar from "./components/BottomBar";
import Viewport from "./components/Viewport";

function App() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="bar">
            <a href="/" className="vicio"></a>
            <div className="bar-left">
              <div className="div-block-39">
                <div className="div-block-41">
                  <div className="top-fire"></div>
                  <div className="div-block-42"></div>
                </div>
                <div className="top-item-wrapper">
                  <div className="top-item-text">
                    The hottest burger of today is BBQ Bacon Cheeseburger
                  </div>
                </div>
              </div>
              <a href="/pide-ya" className="main-cta">
                <div className="main-cta-text">Order now</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Viewport />
      <BottomBar />
    </>
  );
}

export default App;
