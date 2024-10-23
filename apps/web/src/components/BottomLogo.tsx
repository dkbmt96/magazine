import React from "react";
import MainLogo from "/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

const BottomLogo: React.FC = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="w-full pt-8">
      <img width={244} src={MainLogo} className="logo" alt="Main logo" />
      <div className="text-wrap py-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => handleClick("https://www.facebook.com")}
          className="text-gray-700 px-2 border-solid border-2 rounded hover:bg-gray-200"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </button>
        <button
          onClick={() => handleClick("https://www.instagram.com")}
          className="text-gray-700 px-2 border-solid border-2 rounded hover:bg-gray-200"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </button>
        <button
          onClick={() => handleClick("https://www.twitter.com")}
          className="text-gray-700 px-2 border-solid border-2 rounded hover:bg-gray-200"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </button>
        <button
          onClick={() => handleClick("https://www.linkedin.com")}
          className="text-gray-700 px-2 border-solid border-2 rounded hover:bg-gray-200"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </button>
        <button
          onClick={() => handleClick("https://www.youtube.com")}
          className="text-gray-700 px-2 border-solid border-2 rounded hover:bg-gray-200"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </button>
      </div>
    </div>
  );
};

export default BottomLogo;
