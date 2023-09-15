import "./MovingBanner.css";

function MovingBanner() {
  return (
    <div className="banner-wrapper overflow-hidden">
      <div className="banner-content flex">
        <div className="banner bg-[url('assets/burger-club-banner.png')] bg-no-repeat bg-cover"></div>
        <div className="banner bg-[url('assets/burger-club-banner.png')] bg-no-repeat bg-cover"></div>
      </div>
    </div>
  );
}

export default MovingBanner;
