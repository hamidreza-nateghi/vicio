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

function Viewport() {
  return (
    <div className="row h-screen pt-[10.59vh]">
      <div className="column">
        <div className="main-box-1-wrapper">
          <a
            href="/product/cheeseburger-trufada"
            className="burger-wrapper transition-[transform] duration-[400ms] absolute hover:scale-95"
          >
            <img
              className="image-2 object-contain"
              src={Burger}
              width="634"
              alt="Truffled Cheeseburger"
              loading="lazy"
            />
          </a>
          <div className="row">
            <div className="box-1 relative flex flex-col justify-end">
              <a href="/" className="link-block group">
                <div className="burger-club-wrapper flex items-center">
                  <div className="div-block-14 bg-[url('assets/icon-world.svg')] bg-contain bg-center"></div>
                  <div className="text-block">Vicio Burger Club</div>
                </div>
                {/* <div className="cities-link-wrapper overflow-hidden">
                      <div className="-translate-y-1/2 transition-[transform] duration-[400ms] ease-out group-hover:translate-y-0">
                        <div className="vicio-cities"></div>
                        <div className="vicio-cities"></div>
                      </div>
                    </div> */}
                <HoverStack
                  width="w-[123.34vh]"
                  height="h-[18.69vh]"
                  backgroundImage="bg-[url('assets/vicio-cities.svg')]"
                />
              </a>
              <div className="arrown-cities bg-arrow absolute bottom-0 left-0"></div>
              <div className="burger-cities absolute pointer-events-none"></div>
              <div className="star-3 bg-star"></div>
              <div className="star-4 bg-star"></div>
            </div>
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
                <div className="box-3">
                  <div className="home-burger-text">
                    Cheeseburger
                    <br />
                    Truffled
                  </div>
                  <div className="icon-arrow bg-arrow"></div>
                </div>
                <div className="box-4">
                  <a
                    href="/"
                    className="collection-link-block w-inline-block group"
                  >
                    <div className="row-menu">
                      <div className="collection-icon-wrapper">
                        <div className="div-block-3">
                          <div className="text-block">W23</div>
                          <div className="div-block-2"></div>
                        </div>
                        <div className="div-block-4">
                          <img
                            src={BurgerRotationHover}
                            loading="lazy"
                            className="image-3"
                          />
                        </div>
                        <div className="div-block-5"></div>
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
                    </div>
                  </a>
                  <div className="div-block-9">
                    <div className="text-block">Here's our menu</div>
                  </div>
                  <div className="row-menu">
                    <div className="collection-list-wrapper-4">
                      <ul role="list" className="collection-list-3">
                        <BurgerItem>Vicio Originals</BurgerItem>
                        <BurgerItem>Pollos Hermanos</BurgerItem>
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
              </div>
            </div>
            <div className="box-5 flex">
              <PictureBox
                imageSrc={Picture1}
                videoSrc={{ mp4: VicioWeb01MP4, webm: VicioWeb01Webm }}
              />
              <video loop autoPlay muted playsInline className="picture-box">
                <source src={VicioWeb02MP4} type="video/mp4" />
                <source src={VicioWeb02Webm} type="video/webm" />
              </video>
              <PictureBox
                imageSrc={FOTO1}
                videoSrc={{ mp4: VicioWeb03MP4, webm: VicioWeb03Webm }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="row-alt">
          <div className="box-6">
            <a href="/" className="link-home-ig w-inline-block">
              <div className="text-block">
                Daily dose
                <br />
                of Vicio here
              </div>
              <img src={qrInsta} className="qr" />
              <div className="div-block-18">
                <div className="div-block-19"></div>
                <div className="div-block-20"></div>
              </div>
            </a>
          </div>
          <div className="box-7">
            <div className="vicio-logo-video w-background-video">
              <video autoPlay loop muted playsInline>
                <source src={VicioLogoMP4} type="video/mp4" />
                <source src={VicioLogoWebm} type="video/webm" />
              </video>
            </div>
          </div>
          <div className="box-8">
            <div className="div-block-22">
              <img src={IMG} loading="lazy" />
            </div>
            <div className="div-block-31">
              <div className="div-block-30"></div>
              <div className="text-block-4">And Nike gave it to us</div>
            </div>
          </div>
          <div className="box-9">
            <a href="/" className="w-inline-block">
              <div className="faqs-link-wrapper">
                <div className="faqs-link-content">
                  <div className="faqs"></div>
                  <div className="faqs"></div>
                </div>
              </div>
            </a>
            <div className="div-block-19"></div>
            <div className="circle-vicio">
              <div className="circle-vicio-0"></div>
              <div className="circle-vicio-1"></div>
            </div>
          </div>
          <div className="box-11">
            <img src={IMG5} className="image-4" />
          </div>
        </div>
        <div className="row">
          <div className="box-12">
            <div className="arrown-about"></div>
            <a href="/" className="group">
              {/* <div className="about-link-wrapper">
                    <div className="about-link-content">
                      <div className="about-link-box"></div>
                      <div className="about-link-box"></div>
                    </div>
                  </div> */}
              <HoverStack
                width="w-[76.23vh]"
                height="h-[14.27vh]"
                backgroundImage="bg-[url('assets/about-us.svg')]"
              />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="relative">
            <div className="pack pointer-events-none"></div>
            <div className="home-little-star bg-star"></div>
          </div>
          <div>
            <MovingBanner />
            <div className="div-block-27 flex justify-between items-center">
              <div className="text-block-3 font-HelveticaNeue uppercase">
                Fast, Good & Loud
                <br />
                This is Vicio.
              </div>
              <FooterLink fontSize="text-[1.4vh]">@ganasdevicio</FooterLink>
            </div>
          </div>
          <div className="relative pointer-events-none">
            <div className="div-block-28 absolute bg-[url('assets/Mask_group.png')] bg-contain bg-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewport;
