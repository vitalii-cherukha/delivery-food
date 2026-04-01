import { Link } from "react-router";
import Container from "../Container/Container";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.inner}>
          <Link to="/shop" className={css.brand}>
            <img src="/logo.svg" alt="FoodRush logo" className={css.logo} />
            <span className={css.brandName}>FoodRush</span>
          </Link>
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
        </div>
      </Container>
    </header>
  );
};

export default Header;
