import titulo from "../data.json";

function Header() {
  return (
    <body>
      <h1>{titulo.header.title}</h1>
      <h2>{titulo.header.subheading}</h2>
      <p>{titulo.header.paragraph}</p>
      <button>{titulo.header.button}</button>
    </body>
  );
}

export default Header;
