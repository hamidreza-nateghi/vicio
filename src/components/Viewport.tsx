import "./Viewport.css";
import Burger from "../assets/burger.png";
import BurgerRotationHover from "../assets/burger-rotation-hover.gif";
import Picture1 from "../assets/picture-1.jpeg";
import FOTO1 from "../assets/FOTO-1.png";
import qrInsta from "../assets/qr-insta.png";
import VicioLogoMP4 from "../assets/VICIO_Logo-Web-transcode.mp4";
import VicioLogoWebm from "../assets/VICIO_Logo-Web-transcode.webm";
import IMG from "../assets/IMG.png";
import IMG5 from "../assets/IMG-5.png";
import VicioWeb01MP4 from "../assets/VICIO-Web-01-transcode.mp4";
import VicioWeb01Webm from "../assets/VICIO-Web-01-transcode.webm";
import VicioWeb02MP4 from "../assets/VICIO-Web-02-transcode.mp4";
import VicioWeb02Webm from "../assets/VICIO-Web-02-transcode.webm";
import VicioWeb03MP4 from "../assets/VICIO-Web-03-transcode.mp4";
import VicioWeb03Webm from "../assets/VICIO-Web-03-transcode.webm";
import BurgerItem from "./BurgerItem";
import PictureBox from "./PictureBox";
import MovingBanner from "./MovingBanner";
import FooterLink from "./FooterLink";
import HoverStack from "./HoverStack";
import CircularVicio from "./CircularVicio";

function Viewport() {
  return (
    <div className="row h-screen pt-[10.59vh]">
      <div className="column">
        <a
          href="/"
          className="z-10 transition-[transform] duration-[400ms] absolute hover:scale-95"
        >
          <img
            className="w-[90vh] h-[70vh] relative -top-[10vh] -left-[15vh] object-contain"
            src={Burger}
            width="634"
            alt="Truffled Cheeseburger"
            loading="lazy"
          />
        </a>
        <div className="row z-20 w-[144.78vh] h-[29.18vh] ml-[71.89vh] relative flex flex-col justify-end">
          <a href="/" className="group peer">
            <div className="flex items-center gap-[0.86vh] mb-[0.88vh]">
              <div className="w-[4.32vh] h-[1.94vh] bg-[url('assets/icon-world.svg')] bg-contain bg-center"></div>
              <span className="text-block">Vicio Burger Club</span>
            </div>
            <HoverStack
              width="w-[123.34vh]"
              height="h-[18.69vh]"
              backgroundImage="bg-[url('assets/vicio-cities.svg')]"
            />
          </a>
          <div className="bg-arrow w-[1.94vh] h-[1.94vh] transition-[transform] duration-300 ease-out absolute bottom-0 peer-hover:rotate-90"></div>
          <div className="absolute pointer-events-none bg-[url('assets/burger-1.png')] bg-contain w-[37.62vh] h-[52.97vh] -bottom-[29.1vh] -right-[17.5vh]"></div>
          <div className="bg-star w-[2.48vh] h-[3.13vh] top-[11.4vh] right-[17.15vh]"></div>
          <div className="bg-star w-[3.45vh] h-[4.21vh] -bottom-[7.5vh] -right-[4vh]"></div>
        </div>
        <div className="row">
          <div className="column">
            <div className="relative h-[21.29vh]">
              <div className="text-block absolute text-right top-[2.59vh] right-[2.59vh]">
                Te Damos Lo Tuyo
                <br />
                @ganasdevicio
              </div>
              <div className="bg-star w-[3.45vh] h-[4.21vh] top-[6.7vh] right-[20.75vh]"></div>
              <div className="bg-star w-[1.62vh] h-[1.94vh] top-[18.7vh] right-[8.32vh]"></div>
              <div className="absolute bg-[url('assets/icon-happy.svg')] bg-contain bg-center w-[3.24vh] h-[3.24vh] bottom-0 right-[3.02vh]"></div>
            </div>
            <div className="row">
              <div className="relative min-w-[14.7vh] flex justify-end -top-[1.8vh]">
                <div className="text-block text-right">
                  Cheeseburger
                  <br />
                  Truffled
                </div>
                <div className="bg-arrow w-[1.08vh] h-[1.08vh] mt-[0.32vh] ml-[0.32vh]"></div>
              </div>
              <div className="z-20 flex flex-col w-[78.27vh]">
                <a href="/" className="group flex">
                  <div className="flex flex-col items-center justify-between">
                    <div className="w-full flex justify-between">
                      <div className="text-block">W23</div>
                      <div className="bg-arrow w-[1.94vh] h-[1.94vh] mt-[0.21vh] transition-[transform] duration-500 ease-out group-hover:rotate-90"></div>
                    </div>
                    <div className="p-0.5 w-[6.81vh] h-[4.54vh] bg-[url('assets/burger-box.svg')] bg-contain">
                      <img
                        src={BurgerRotationHover}
                        loading="lazy"
                        className="transition-[opacity] duration-300 ease-out opacity-0 group-hover:opacity-100"
                      />
                    </div>
                    <div className="w-[7.13vh] h-[3.13vh] bg-[url('assets/map.svg')] bg-contain"></div>
                  </div>
                  {/* <div className="collection-link-wrapper">
                            <div className="collection-scroll-wrapper">
                              <div className="collection-text"></div>
                              <div className="collection-text"></div>
                            </div>
                          </div> */}
                  <HoverStack
                    width="w-[70.96vh]"
                    height="h-[10.96vh]"
                    backgroundImage="bg-[url('assets/collection.svg')]"
                  />
                </a>
                <div className="text-right pt-[0.86vh] text-block">
                  Here's our menu
                </div>
                <ul
                  role="list"
                  className="w-[46vh] flex flex-wrap gap-x-[0.43vh]"
                >
                  <BurgerItem>Vicio Originals</BurgerItem>
                  <BurgerItem>La Pollos</BurgerItem>
                  <BurgerItem>BBQ Bacon Cheeseburger</BurgerItem>
                  <BurgerItem>Vegan Truffle</BurgerItem>
                  <BurgerItem>Iberian Cheeseburger</BurgerItem>
                  <BurgerItem>Vegan</BurgerItem>
                  <BurgerItem>Truffled Cheeseburger</BurgerItem>
                  <BurgerItem>Bacon Cheeseburger</BurgerItem>
                  <BurgerItem>Cheeseburger</BurgerItem>
                </ul>
              </div>
            </div>
          </div>
          <PictureBox
            imageSrc={Picture1}
            videoSrc={{ mp4: VicioWeb01MP4, webm: VicioWeb01Webm }}
          />
          <video loop autoPlay muted playsInline className="video-box">
            <source src={VicioWeb02MP4} type="video/mp4" />
            <source src={VicioWeb02Webm} type="video/webm" />
          </video>
          <PictureBox
            imageSrc={FOTO1}
            videoSrc={{ mp4: VicioWeb03MP4, webm: VicioWeb03Webm }}
          />
        </div>
      </div>
      <div className="column">
        <div className="flex">
          <div className="z-20 text-right w-[12vh] h-[31.24vh] self-end">
            <a href="/">
              <div className="text-block">
                Daily dose
                <br />
                of Vicio here
              </div>
              <img src={qrInsta} className="w-[8.1vh] h-[8.1vh] mt-[2.16vh]" />
              <div className="flex justify-end items-center mt-[0.86vh] gap-[1.29vh]">
                <div className="bg-arrow w-[3.35vh] h-[3.35vh]"></div>
                <div className="bg-instagram w-[3.67vh] h-[3.67vh]"></div>
              </div>
            </a>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[51.67vh] h-[31.24vh] self-end ml-[2.16vh]"
          >
            <source src={VicioLogoMP4} type="video/mp4" />
            <source src={VicioLogoWebm} type="video/webm" />
          </video>
          <div className="flex flex-col justify-between ml-[2.16vh]">
            <img src={IMG} loading="lazy" className="w-[26.7vh] h-[32.75vh]" />
            <div className="flex gap-[0.86vh]">
              <div className="bg-[url('assets/bar-code.svg')] bg-contain w-[11.02vh] h-[2.91vh]"></div>
              <div className="text-block">And Nike gave it to us</div>
            </div>
          </div>
          <div className="ml-[1vh]">
            <a href="/" className="inline-block group peer">
              <div className="w-[8.64vh] h-[20.86vh] overflow-hidden">
                <div className="faqs-link-content flex w-[17.36vh] -translate-x-1/2 transition-[transform] duration-200 ease-out group-hover:translate-x-0">
                  <div className="bg-[url('assets/faqs.svg')] bg-contain w-[8.64vh] h-[20.86vh]"></div>
                  <div className="bg-[url('assets/faqs.svg')] bg-contain w-[8.64vh] h-[20.86vh]"></div>
                </div>
              </div>
            </a>
            <div className="mt-[0.86vh] bg-arrow w-[3.35vh] h-[3.35vh] transition-[transform] duration-300 ease-out peer-hover:-rotate-90"></div>
            <div className="mb-[2.7vh]"></div>
            <CircularVicio />
          </div>
          <img src={IMG5} className="w-[27.13vh] h-[36.97vh] ml-[0.64vh]" />
        </div>
        <div className="relative flex ml-[39vh]">
          <a href="/" className="group peer">
            <HoverStack
              width="w-[76.23vh]"
              height="h-[14.27vh]"
              backgroundImage="bg-[url('assets/about-us.svg')]"
            />
          </a>
          <div className="absolute w-[1.94vh] h-[1.94vh] bg-arrow transition-[transform] duration-300 ease-out peer-hover:rotate-90"></div>
        </div>
        <div className="row">
          <div className="relative">
            <div className="z-10 absolute w-[47.56vh] h-[49.08vh] -top-[26.7vh] -left-[6.2vh] bg-[url('assets/Pack.png')] bg-contain pointer-events-none"></div>
            <div className="w-[1.62vh] h-[1.94vh] -top-[10.2vh] -right-[37.1vh] bg-star"></div>
          </div>
          <div>
            <MovingBanner />
            <div className="w-[77.18vh] mt-[1.62vh] ml-[39vh] flex justify-between items-center">
              <div className="text-[1.08vh] leading-[1.51vh] font-HelveticaNeue uppercase">
                Fast, Good & Loud
                <br />
                This is Vicio.
              </div>
              <FooterLink fontSize="text-[1.4vh]">@ganasdevicio</FooterLink>
            </div>
          </div>
          <div className="relative pointer-events-none">
            <div className="w-[25.08vh] h-[52.64vh] -bottom-[7vh] right-0 absolute bg-[url('assets/Mask_group.png')] bg-contain bg-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewport;
