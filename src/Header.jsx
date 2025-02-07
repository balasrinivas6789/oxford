import { FaUser, FaCog, FaBell, FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-semibold text-gray-800">MyApp</div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600 hover:text-blue-600"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars size={24} />
      </button>

      {/* Navigation */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white md:relative md:top-auto md:left-auto md:w-auto md:flex gap-6 shadow-md md:shadow-none p-4 md:p-0`}
      >
        <a href="#" className="block md:inline text-gray-600 hover:text-blue-600 p-2">Home</a>
        <a href="#" className="block md:inline text-gray-600 hover:text-blue-600 p-2">About</a>
        <a href="#" className="block md:inline text-gray-600 hover:text-blue-600 p-2">Services</a>
        <a href="#" className="block md:inline text-gray-600 hover:text-blue-600 p-2">Contact</a>
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <FaBell className="text-gray-600 hover:text-blue-600 cursor-pointer" size={20} />
        <FaCog className="text-gray-600 hover:text-blue-600 cursor-pointer" size={20} />
        <FaUser className="text-gray-600 hover:text-blue-600 cursor-pointer" size={20} />
      </div>
    </header>
  );
};

export default Header;
