import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiPhoneCallLight } from "react-icons/pi";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-10"
          src="https://ik.imagekit.io/mzfdf1twu/WhatsApp%20Image%202024-06-28%20at%2016.50.33.jpeg?updatedAt=1719573692096"
          alt=""
        />
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
        <a href="tel:9867982398">
          {" "}
          <PiPhoneCallLight />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
