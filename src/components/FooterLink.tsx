import { PropsWithChildren } from "react";

type Props = {
  fontSize?: string;
};

function FooterLink({
  fontSize = "text-[1.51vh]",
  children,
}: PropsWithChildren<Props>) {
  return (
    <a href="/" className="group">
      <div
        className={`leading-[1.2] ${fontSize} uppercase font-HelveticaNeueCondensed font-bold`}
      >
        {children}
      </div>
      <div className="h-[0.2vh] bg-black w-0 transition-[width] duration-[250ms] ease-out group-hover:w-full"></div>
    </a>
  );
}

export default FooterLink;
