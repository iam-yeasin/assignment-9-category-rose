import { Link } from "react-router-dom";
import PrivacyPolicy from "./../pages/PrivacyPolicy";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">WarmPaws</h2>
          <p className="text-gray-400 text-sm">
            Providing loving and professional care for your pets. Your furry
            friends are our top priority.
          </p>
          <ul>
            <li className="mt-7">
              <Link
                to="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/service-details/1"
                className="hover:text-white transition"
              >
                Pet Checkup
              </Link>
            </li>
            <li>
              <Link
                to="/service-details/2"
                className="hover:text-white transition"
              >
                Vaccinations
              </Link>
            </li>
            <li>
              <Link
                to="/service-details/3"
                className="hover:text-white transition"
              >
                Pet Surgery
              </Link>
            </li>
            <li>
              <Link
                to="/service-details/4"
                className="hover:text-white transition"
              >
                Pet Grooming
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm mb-2">
            123 Pet Street, Animal City
          </p>
          <p className="text-gray-400 text-sm mb-2">Email: info@WarmPaws.com</p>
          <p className="text-gray-400 text-sm mb-4">Phone: +1 234 567 890</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        © 2025 WarmPaws. All rights reserved.
        {/* &copy; {new Date().getFullYear()} WarmPaws. All rights reserved. */}
      </div>
    </footer>
  );
};

export default Footer;
