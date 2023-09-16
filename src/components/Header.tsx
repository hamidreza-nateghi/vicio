import "./Header.css";

function Header() {
  return (
    <header className="container w-full fixed flex justify-between items-center">
      <a href="/" className="vicio bg-[url('assets/vicio.svg')] bg-contain"></a>
      <div className="bar-left flex items-center">
        <div className="flex">
          <div className="flex flex-col justify-between">
            <div className="top-fire bg-[url('assets/fire-black.svg')] bg-contain"></div>
            <div className="div-block-42 bg-[url('assets/line-order-now.svg')] bg-cover"></div>
          </div>
          <p className="top-item-text font-HelveticaNeueCondensed uppercase font-bold text-right">
            The hottest burger of today is BBQ Bacon Cheeseburger
          </p>
        </div>
        <a href="/" className="action-button">
          Order now
        </a>
      </div>
    </header>
  );
}

export default Header;
