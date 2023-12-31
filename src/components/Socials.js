import React, { useContext } from "react";
//import icons
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImYoutube,
  ImInstagram,
} from "react-icons/im";
// import context
import { CursorContext } from "../context/CursorContext";
const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="hidden xl:flex ml-24"
    >
      <ul className="flex gap-x-4">
        <li>
          <a href="http://www.facebook.com">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="http://www.twitter.com">
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href="http://www.pinterest.com">
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href="http://www.facebook.com">
            <ImYoutube />
          </a>
        </li>
        <li>
          <a href="http://www.instagram.com">
            <ImInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
