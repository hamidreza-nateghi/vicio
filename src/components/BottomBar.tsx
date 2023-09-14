import "./BottomBar.css";

function BottomBar() {
  return (
    <div className="bottom-bar">
      <div className="container">
        <div className="footer">
          <div className="footer-left-links">
            <a href="/" className="footer-link-block">
              <div>
                <div className="footer-link-text">Collection</div>
                <div className="footer-link-line"></div>
              </div>
            </a>
            <a href="/" className="footer-link-block">
              <div>
                <div className="footer-link-text">About us</div>
                <div className="footer-link-line"></div>
              </div>
            </a>
          </div>
          <div className="footer-right-links">
            <div className="footer-right-collection">Presskit</div>
            <a className="w-inline-block">
              <div className="footer-ig-wrapper">
                <div className="link-footer-ig"></div>
                <div className="link-footer-arrow"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
