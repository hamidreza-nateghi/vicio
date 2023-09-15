import "./PictureBox.css";

type Props = {
  imageSrc: string;
  videoSrc: {
    mp4: string;
    webm: string;
  };
};

function PictureBox({ imageSrc, videoSrc }: Props) {
  return (
    <div className="picture-box group relative">
      <video
        loop
        muted
        playsInline
        onMouseOver={(event) => (event.target as HTMLVideoElement).play()}
        onMouseOut={(event) => (event.target as HTMLVideoElement).pause()}
        className="w-full h-full object-cover absolute invisible group-hover:visible"
      >
        <source src={videoSrc.mp4} type="video/mp4" />
        <source src={videoSrc.webm} type="video/webm" />
      </video>
      <img src={imageSrc} className="h-full w-full" />
    </div>
  );
}

export default PictureBox;
