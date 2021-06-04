import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <img
        src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
        className="w-100 not-found-img"
        alt="404 img"
      ></img>
      <div class="text-center">
        <h1>Oops!!!!</h1>
        <h4>Sorry, we can’t find the page you were looking for.</h4>
      </div>
    </div>
  );
};

export default NotFound;
