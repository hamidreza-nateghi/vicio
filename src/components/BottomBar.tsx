import "./BottomBar.css";
import FooterLink from "./FooterLink";

function BottomBar() {
  return (
    <footer className="container fixed w-full bottom-0 flex justify-between items-center">
      <div className="flex footer-left-links">
        <FooterLink>Collection</FooterLink>
        <FooterLink>About us</FooterLink>
      </div>
      <div className="footer-right-links flex items-end">
        <div className="footer-right-collection">Presskit</div>
        <a className="footer-ig-wrapper card">
          <div className="link-footer-icon bg-[url('assets/icon-instagram.svg')] bg-no-repeat bg-contain"></div>
          <div className="link-footer-icon bg-[url('assets/arrow.svg')] bg-no-repeat bg-contain"></div>
        </a>
      </div>
    </footer>
  );
}

export default BottomBar;
