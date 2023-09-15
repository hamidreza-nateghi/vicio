import "./BurgerItem.css";

function BurgerItem({ children }: { children: React.ReactNode }) {
  return (
    <li role="listitem" className="collection-item-5">
      <a href="/" className="link-products">
        {children}
      </a>
      <span className="product-separator">/</span>
    </li>
  );
}

export default BurgerItem;
