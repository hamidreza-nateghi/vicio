import "./MovingBanner.css";

function MovingBanner() {
  return (
    <div className="w-[134vh] overflow-hidden">
      <div className="w-[337.72vh] flex animate-[infinite-banner_12s_linear_infinite]">
        <div className="w-[168.86vh] h-[9.72vh] bg-[url('assets/burger-club-banner.png')] bg-no-repeat bg-cover"></div>
        <div className="w-[168.86vh] h-[9.72vh] bg-[url('assets/burger-club-banner.png')] bg-no-repeat bg-cover"></div>
      </div>
    </div>
  );
}

export default MovingBanner;
