function HeaderBar() {
  return (
    <header className="container w-full fixed flex justify-between items-center">
      <a
        href="/"
        className="vicio my-[2.81vh] w-[12.64vh] h-[3.02vh] bg-[url('assets/vicio.svg')] bg-contain"
      ></a>
      <div className="flex items-center gap-[2.16vh]">
        <div className="flex">
          <div className="flex flex-col justify-between">
            <div className="w-[1.51vh] h-[1.94vh] bg-[url('assets/fire-black.svg')] bg-contain"></div>
            <div className="w-[4.21vh] h-[0.15vh] mb-[0.86vh] bg-[url('assets/line-order-now.svg')] bg-cover"></div>
          </div>
          <p className="max-w-[20.16vh] text-[1.4vh] leading-[1.72vh] font-HelveticaNeueCondensed uppercase font-bold text-right">
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

export default HeaderBar;
