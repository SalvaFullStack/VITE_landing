import logo from "../data.json";

function Navbar() {
  return (
    <header>
      <h1>
        <img src={logo.navbar.img} alt="logo" />
      </h1>
      <nav>
        <ul>
          {logo.navbar.links.map((link, index) => (
            <li key={index}>
              <a>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
