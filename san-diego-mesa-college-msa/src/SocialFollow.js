import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./SocialFollow.css";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <a href="https://chat.whatsapp.com/DSbKbmFihZj5Owm521b1vu"
        className="whatsapp social">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <a href="https://www.instagram.com/msasdmc/?hl=en"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}