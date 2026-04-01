import { Link } from "react-router";
import Container from "../Container/Container";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css.nav}>
          <ul className={css.list}>
            <li className={css.item}>
              <Link className={css.link} to="/shop">
                Shop
              </Link>
            </li>
            <li className={css.item}>
              <Link className={css.link} to="/shopping-cart">
                Shopping Cart
              </Link>
            </li>
            <li className={css.item}>
              <Link className={css.link} to="/history">
                History
              </Link>
            </li>
            <li className={css.item}>
              <Link className={css.link} to="/coupons">
                Coupons
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
