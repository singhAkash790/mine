import React from "react";
import "../../Button/Button.css";
import { Link } from "react-router-dom";

const Index = ({ buttonText, _class, pageLink, OutlineDropdown }) => {
  return (
    <Link to={pageLink} className="outline-button">
      <div
        className={`btn-8 ${_class}`}
      >
        {buttonText}
        {OutlineDropdown && (
        <i aria-hidden="true" class="dropdown icon"></i>
      )}
      </div>
      {OutlineDropdown && (
        <div className="dropdown-content">
          <ul>
            <li>Patient Login</li>
            <li>Doctor Login</li>
            <li>Employee Login</li>
          </ul>
        </div>
      )}
    </Link>
  );
};

export default Index;
