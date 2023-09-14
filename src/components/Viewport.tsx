import "./Viewport.css";
import Burger from "../assets/burger.png";
import BurgerRotationHover from "../assets/burger-rotation-hover.gif";
import Picture1 from "../assets/picture-1.jpeg";
import VicioGif2 from "../assets/vicio-gif-2.png";
import FOTO1 from "../assets/FOTO-1.png";
import qrInsta from "../assets/qr-insta.png";
import VicioLogoMP4 from "../assets/VICIO_Logo-Web-transcode.mp4";
import VicioLogoWebm from "../assets/VICIO_Logo-Web-transcode.webm";
import IMG from "../assets/IMG.png";
import IMG5 from "../assets/IMG-5.png";
import VicioWeb01MP4 from "../assets/VICIO-Web-01-transcode.mp4";
import VicioWeb01Webm from "../assets/VICIO-Web-01-transcode.webm";
import VicioWeb03MP4 from "../assets/VICIO-Web-03-transcode.mp4";
import VicioWeb03Webm from "../assets/VICIO-Web-03-transcode.webm";

function Viewport() {
  return (
    <div className="viewport">
      <div className="main-content">
        <div className="row">
          <div className="column">
            <div className="main-box-1-wrapper">
              <div className="burger-wrapper">
                <div>
                  <div role="list">
                    <div role="listitem">
                      <a
                        href="/product/cheeseburger-trufada"
                        className="link-burger-home w-inline-block"
                      >
                        <img
                          className="image-2"
                          src={Burger}
                          width="634"
                          alt="Truffled Cheeseburger"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="box-1">
                  <a href="/" className="link-block w-inline-block">
                    <div className="burger-club-wrapper">
                      <div className="div-block-14"></div>
                      <div className="text-block">VICIO BURGER CLUB</div>
                    </div>
                    <div className="cities-link-wrapper">
                      <div className="cities-text-wrapper">
                        <div className="vicio-cities"></div>
                        <div className="vicio-cities"></div>
                      </div>
                    </div>
                  </a>
                  <div className="arrown-cities"></div>
                  <div className="burger-cities"></div>
                  <div className="star-3"></div>
                  <div className="star-4"></div>
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <div className="box-2">
                    <div className="box-2-text-wrapper">
                      <div className="text-block">
                        TE DAMOS LO TUYO
                        <br />
                        @GANASDEVICIO
                      </div>
                    </div>
                    <div className="star-1"></div>
                    <div className="star-2"></div>
                    <div className="happy"></div>
                  </div>
                  <div className="row">
                    <div className="box-3">
                      <div className="home-burger-text">
                        Cheeseburger
                        <br />
                        Truffled
                      </div>
                      <div className="icon-arrow"></div>
                    </div>
                    <div className="box-4">
                      <a
                        href="/"
                        className="collection-link-block w-inline-block"
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
                          <div className="collection-link-wrapper">
                            <div className="collection-scroll-wrapper">
                              <div className="collection-text"></div>
                              <div className="collection-text"></div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <div className="div-block-9">
                        <div className="text-block">HERE'S OUR MENU</div>
                      </div>
                      <div className="row-menu">
                        <div className="collection-list-wrapper-4">
                          <div role="list" className="collection-list-3">
                            <div role="listitem" className="collection-item-5">
                              <a href="/" className="link-products">
                                VICIO Originals
                              </a>
                              <div className="product-separator">/</div>
                            </div>
                            <div role="listitem" className="collection-item-5">
                              <a href="/" className="link-products">
                                Pollos Hermanos
                              </a>
                              <div className="product-separator">/</div>
                            </div>
                            <div role="listitem" className="collection-item-5">
                              <a href="/" className="link-products">
                                BBQ Bacon Cheeseburger
                              </a>
                              <div className="product-separator">/</div>
                            </div>
                            <div role="listitem" className="collection-item-5">
                              <a href="/" className="link-products">
                                Vegan Truffle
                              </a>
                              <div className="product-separator">/</div>
                            </div>
                            <div role="listitem" className="collection-item-5">
                              <a href="/" className="link-products">
                                Iberian Cheeseburger
                              </a>
                              <div className="product-separator">/</div>
                            </div>
                            <div role="listitem" className="collection-item-5">
                              <a href="/" className="link-products">
                                Vegan
                              </a>
                              <div className="product-separator">/</div>
                            </div>
                            <div role="listitem" className="collection-item-5">
                              <a href="/" className="link-products">
                                Truffled Cheeseburger
                              </a>
                              <div className="product-separator">/</div>
                            </div>
                            <div role="listitem" className="collection-item-5">
                              <a href="/" className="link-products">
                                Bacon Cheeseburger
                              </a>
                              <div className="product-separator">/</div>
                            </div>
                            <div role="listitem" className="collection-item-5">
                              <a href="/" className="link-products">
                                Cheeseburger
                              </a>
                              <div className="product-separator">/</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-5">
                  <div className="picture-box-1">
                    <div className="background-video-2 play-on-hover w-background-video">
                      <video
                        loop
                        muted
                        playsInline
                        onMouseOver={(event) =>
                          (event.target as HTMLVideoElement).play()
                        }
                        onMouseOut={(event) =>
                          (event.target as HTMLVideoElement).pause()
                        }
                      >
                        <source src={VicioWeb01MP4} type="video/mp4" />
                        <source src={VicioWeb01Webm} type="video/webm" />
                      </video>
                    </div>
                    <img src={Picture1} className="image" />
                  </div>
                  <div className="picture-box-1">
                    <img src={VicioGif2} className="image" />
                  </div>
                  <div className="picture-box-1">
                    <div className="background-video-2 play-on-hover w-background-video">
                      <video
                        loop
                        muted
                        playsInline
                        onMouseOver={(event) =>
                          (event.target as HTMLVideoElement).play()
                        }
                        onMouseOut={(event) =>
                          (event.target as HTMLVideoElement).pause()
                        }
                      >
                        <source src={VicioWeb03MP4} type="video/mp4" />
                        <source src={VicioWeb03Webm} type="video/webm" />
                      </video>
                    </div>
                    <img src={FOTO1} className="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="row-alt">
              <div className="box-6">
                <a href="/" className="link-home-ig w-inline-block">
                  <div className="text-block">
                    DAILY DOSE
                    <br />
                    OF VICIO HERE
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
                <a href="/" className="w-inline-block">
                  <div className="about-link-wrapper">
                    <div className="about-link-content">
                      <div className="about-link-box"></div>
                      <div className="about-link-box"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="box-13">
                <div className="pack"></div>
                <div className="home-little-star"></div>
              </div>
              <div>
                <div className="banner-wrapper">
                  <div className="banner-content">
                    <div className="banner"></div>
                    <div className="banner"></div>
                  </div>
                </div>
                <div className="div-block-27">
                  <div className="text-block-3">
                    Fast, Good & Loud
                    <br />
                    This is Vicio.
                  </div>
                  <a href="/" className="link-block-5 w-inline-block">
                    <div className="text-block-7">@ganasdevicio</div>
                    <div className="div-block-38"></div>
                  </a>
                </div>
              </div>
              <div className="box-15">
                <div className="div-block-28"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewport;
