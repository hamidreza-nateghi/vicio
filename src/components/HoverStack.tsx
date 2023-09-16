import "./HoverStack.css";

function HoverStack({
  width,
  height,
  backgroundImage,
}: {
  width: string;
  height: string;
  backgroundImage: string;
}) {
  return (
    <div className={`${width} ${height} overflow-hidden`}>
      <div className="-translate-y-1/2 transition-[transform] duration-[400ms] ease-out group-hover:translate-y-0">
        <div
          className={`${width} ${height} ${backgroundImage} bg-contain`}
        ></div>
        <div
          className={`${width} ${height} ${backgroundImage} bg-contain`}
        ></div>
      </div>
    </div>
  );
}

export default HoverStack;
