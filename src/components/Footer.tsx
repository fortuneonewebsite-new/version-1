import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-[#F7E9DD] text-[#3A2E25] font-serif">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Section */}
          <div className="flex flex-col h-full">
            <div className="flex items-start justify-start mb-4 ml-0">
              <img
                src="/Fortune One.png"
                alt="Fortune One Logo"
                className="h-20 w-auto"
              />
            </div>

            <h3 className="italic font-medium mb-2">Our Abode</h3>
            <p>Fortune One Build Co Pvt Ltd</p>
          </div>

          {/* Middle Section */}
          <div>
            <h3 className="italic font-medium mb-6">Hello, We are Fortune One.</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#6B4E3D] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#6B4E3D] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-[#6B4E3D] transition-colors"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="hover:text-[#6B4E3D] transition-colors"
                >
                  Channel Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/nri-support"
                  className="hover:text-[#6B4E3D] transition-colors"
                >
                  NRI Support
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#6B4E3D] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="text-right md:text-left">
            <h3 className="italic font-medium mb-3">Follow our work</h3>
            <div className="flex md:justify-start justify-end space-x-4">
              <a
                href="#"
                className="text-[#3A2E25] hover:text-[#6B4E3D] transition-colors text-xl"
                title="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-[#3A2E25] hover:text-[#6B4E3D] transition-colors text-xl"
                title="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.996.014 6.79.067 5.584.12 4.775.302 4.082.566c-.693.264-1.226.616-1.76 1.15C1.788 2.25 1.436 2.783 1.172 3.476c-.264.693-.446 1.502-.5 2.708C.614 7.996.6 8.396.6 12.017s.014 4.021.067 5.227c.054 1.206.236 2.015.5 2.708.264.693.616 1.226 1.15 1.76.534.534 1.067.886 1.76 1.15.693.264 1.502.446 2.708.5C7.996 23.386 8.396 23.4 12.017 23.4s4.021-.014 5.227-.067c1.206-.054 2.015-.236 2.708-.5.693-.264 1.226-.616 1.76-1.15.534-.534.886-1.067 1.15-1.76.264-.693.446-1.502.5-2.708.053-1.206.067-1.606.067-5.227s-.014-4.021-.067-5.227c-.054-1.206-.236-2.015-.5-2.708-.264-.693-.616-1.226-1.15-1.76-.534-.534-1.067-.886-1.76-1.15-.693-.264-1.502-.446-2.708-.5C16.038.014 15.638 0 12.017 0zm0 5.351c3.664 0 6.649 2.985 6.649 6.649s-2.985 6.649-6.649 6.649-6.649-2.985-6.649-6.649 2.985-6.649 6.649-6.649zm0 10.954c2.39 0 4.326-1.936 4.326-4.326s-1.936-4.326-4.326-4.326-4.326 1.936-4.326 4.326 1.936 4.326 4.326 4.326zm6.406-11.329c-.854 0-1.547.693-1.547 1.547s.693 1.547 1.547 1.547 1.547-.693 1.547-1.547-.693-1.547-1.547-1.547z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-[#3A2E25] hover:text-[#6B4E3D] transition-colors text-xl"
                title="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-[#3A2E25] hover:text-[#6B4E3D] transition-colors text-xl"
                title="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-[#D5C1A1]" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#3A2E25]/80 space-y-2 md:space-y-0">
          <p>© Copyright FORTUNE ONE BUILD CO PVT LTD {new Date().getFullYear()}</p>
          <div className="flex items-center space-x-4">
            <Link to="/privacy" className="hover:text-[#6B4E3D]">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/disclaimer" className="hover:text-[#6B4E3D]">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
