import React from "react";
import logo from "../assets/926 FSS Patch.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="heading">
        <div className="logo-holder">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="title-holder">
          <h3 className="title">926 FSS Sandstormer Booster Club</h3>
        </div>
        <div >
          <div className="icon_holder">
            <a
              onClick={() => {myFunction()}}
              className="fas fa-align-justify"
              href="#"
              data-target="dropdown1"
            ></a>
            <div id="myDropdown" className="dropdown-content">
              <a href="#">Main</a>
              <a href="#">Donate</a>
              <a href="#">Admin</a>
              <a href="#">Login/Register</a>
              <a href="#">Logout</a>
            </div>
          </div>
        </div>
        <li className="links">
          <li>
            <Link to="/">
              <button>Main</button>
            </Link>
          </li>
          <li>
            <Link to="/Payment">
              <button>Donate</button>
            </Link>
          </li>
          <li>
            <Link to="/Admin">
              <button>Admin</button>
            </Link>
          </li>
          <li>
            <Link to="/Auth">
              <button>Login/Register</button>
            </Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </li>
      </div>
    </header>
  );
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".fa-align-justify")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

export default Header;
