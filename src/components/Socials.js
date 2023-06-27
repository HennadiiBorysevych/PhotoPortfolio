import React from "react";

import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImYoutube,
  ImInstagram,
} from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
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
