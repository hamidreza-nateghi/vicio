import "./FooterLink.css";

function FooterLink({ children }: { children?: React.ReactNode }) {
  return (
    <a href="/" className="footer-link-block group">
      <div className="footer-link-text uppercase font-HelveticaNeueCondensed font-bold">
        {children}
      </div>
      <div className="footer-link-line bg-black w-0 transition-[width] duration-[250ms] ease-out group-hover:w-full"></div>
    </a>
  );
}

export default FooterLink;
