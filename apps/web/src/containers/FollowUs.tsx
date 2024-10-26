import React from "react";
import BlockHeader from "@components/BlockHeader";

import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socials = [
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
  faTwitter,
];
const bgColors = [
  "bg-blue-600",
  "bg-blue-300",
  "bg-blue-400",
  "bg-pink-300",
  "bg-red-600",
  "bg-blue-300",
];

const FollowUs: React.FC = () => {
  return (
    <div className="mb-4">
      <BlockHeader header="Follow Us" />
      <div className="grid grid-cols-2 gap-4 mt-4">
        {socials.map((item, idx) => (
          <button
            key={`${idx}-${item.iconName}`}
            onClick={() => {
              return;
            }}
            className={`py-2 text-gray-700 px-2 border-solid border-2 rounded hover:bg-gray-200 ${bgColors[idx]}`}
          >
            <FontAwesomeIcon icon={item} /> 12345 Fans
          </button>
        ))}
      </div>
    </div>
  );
};

export default FollowUs
