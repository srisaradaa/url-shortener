import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-custom-gradient text-white flex flex-col sm:flex-row sm:justify-between items-center p-10 z-40">
      <div className="flex flex-col items-center sm:items-start">
        <h2 className="text-3xl font-bold mb-2">
          TinyLink
        </h2>
        <p>
          Simplifying URL shortening for efficient sharing.
        </p>
        </div>
      <p className="mt-10 mb-5">
        &copy; 2026 TinyLink. All rights reserved.
      </p>
      <div className="flex space-x-6 text-xl">
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebook className="hover:text-gray-200" />
        </a>
        <a href="https://x.com" target="_blank">
          <FaTwitter className="hover:text-gray-200" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <FaInstagram className="hover:text-gray-200" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <FaLinkedin className="hover:text-gray-200" />
        </a>
      </div>
    </footer>
  )
}

export default Footer