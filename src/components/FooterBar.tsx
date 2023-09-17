import FooterLink from "./FooterLink";

function FooterBar() {
  return (
    <footer className="container fixed w-full bottom-0 flex justify-between items-center">
      <ul className="flex gap-[4.75vh] px-[1vh]">
        <li>
          <FooterLink>Collection</FooterLink>
        </li>
        <li>
          <FooterLink>Vicio Cities</FooterLink>
        </li>
        <li>
          <FooterLink>About us</FooterLink>
        </li>
        <li>
          <FooterLink>Work here</FooterLink>
        </li>
        <li>
          <FooterLink>Faqs</FooterLink>
        </li>
      </ul>
      <div className="flex items-end gap-[2.8vh] pb-[2.81vh]">
        <div>Presskit</div>
        <a href="/" className="flex flex-col gap-[0.64vh] group">
          <div className="w-[1.94vh] h-[1.94vh] bg-instagram transition-[transform] duration-300 ease-out group-hover:rotate-180"></div>
          <div className="w-[1.94vh] h-[1.94vh] bg-arrow transition-[transform] duration-300 ease-out group-hover:-rotate-90"></div>
        </a>
      </div>
    </footer>
  );
}

export default FooterBar;
