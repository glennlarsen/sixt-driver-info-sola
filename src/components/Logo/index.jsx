import logo from "images/sixt-logo-black-white.png";
import logoWhite from "images/sixt-logo-white.png";

function index({ info, logoLight }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      className="logo"
    >
      <img src={logoLight ? logoWhite : logo} alt="Sixt Logo" />
      <span>{info}</span>
    </div>
  );
}

export default index;
