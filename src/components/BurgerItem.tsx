function BurgerItem({ children }: { children: React.ReactNode }) {
  return (
    <li
      role="listitem"
      className="leading-[1.51vh] font-HelveticaNeue text-[1.08vh]"
    >
      <a
        href="/"
        className="uppercase hover:border-b hover:border-black mr-[0.43vh]"
      >
        {children}
      </a>
      <span>/</span>
    </li>
  );
}

export default BurgerItem;
