import "./ActionButton.css";

function ActionButton({ children }: { children?: React.ReactNode }) {
  return (
    <a
      href="/pide-ya"
      className="action-button font-Recoleta uppercase text-center font-bold rounded-full border border-black transition-[background-color] duration-200 hover:bg-black hover:text-white"
    >
      {children}
    </a>
  );
}

export default ActionButton;
