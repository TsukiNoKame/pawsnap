import { Link } from "react-router-dom";
import MoreButton from "./MoreButton";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo-link">
          PawSnap
        </Link>
      </div>
    </>
  );
};

export default Navbar;
