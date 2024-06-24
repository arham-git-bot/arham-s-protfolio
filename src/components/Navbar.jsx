import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/arham-git-bot">
          {" "}
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/arham-sangoi-6b3a59261/">
          {" "}
          <FaLinkedin />
        </a>

        <a href="https://x.com/Arham80625830?t=az-MER1GzVto9ZfAjaRgeg&s=09">
          {" "}
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
