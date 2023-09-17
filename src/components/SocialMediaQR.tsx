import InstagramQR from "../assets/qr-instagram.png";

function SocialMediaQR() {
  return (
    <a href="/" className="group">
      <div className="text-block">
        Daily dose
        <br />
        of Vicio here
      </div>
      <img src={InstagramQR} className="w-[8.1vh] h-[8.1vh] mt-[2.16vh]" />
      <div className="flex justify-end items-center mt-[0.86vh] gap-[1.29vh]">
        <div className="bg-arrow w-[3.35vh] h-[3.35vh] transition-[transform] duration-300 ease-out group-hover:rotate-90"></div>
        <div className="bg-instagram w-[3.67vh] h-[3.67vh] transition-[transform] duration-300 ease-out group-hover:-rotate-180"></div>
      </div>
    </a>
  );
}

export default SocialMediaQR;
