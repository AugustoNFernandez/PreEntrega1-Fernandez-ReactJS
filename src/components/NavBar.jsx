import CartWidget from "./CartWidget";
import "./navbar.css";

export default function NavBar() {
  return (
    <nav className="navContainer">
      <div className="logo">
        <img
          src="/src/components/img/books-apple.svg"
          alt="isoLogo"
          className="imgLogo"
        />
        <h2>Tienda</h2>
      </div>
      <div className="menu">
        <ul className="link">
          <il>
            <a href="#">Home</a>
          </il>
          <il>
            <a href="#">Productos</a>
          </il>
          <il>
            <a href="#">Contacto</a>
          </il>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}