import "./nav.css";
import imgLogo from "../../assets/Logo-removebg-preview.png";
function Nav() {
  return (
    <nav class="container">
      <img src={imgLogo} alt="logoImage" />
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">services</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
        <li>
          <a href="#">support</a>
        </li>
      </ul>
      <button>sign up</button>
    </nav>
  );
}

export default Nav;
