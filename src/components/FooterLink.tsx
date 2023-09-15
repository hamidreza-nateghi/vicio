import { PropsWithChildren } from "react";
import "./FooterLink.css";

type Props = {
  fontSize?: string;
};

function FooterLink({
  fontSize = "text-[1.51vh]",
  children,
}: PropsWithChildren<Props>) {
  return (
    <a href="/" className="footer-link-block group">
      <div
        className={`footer-link-text ${fontSize} uppercase font-HelveticaNeueCondensed font-bold`}
      >
        {children}
      </div>
      <div className="footer-link-line bg-black w-0 transition-[width] duration-[250ms] ease-out group-hover:w-full"></div>
    </a>
  );
}

export default FooterLink;
