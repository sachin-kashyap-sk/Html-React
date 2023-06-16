import React from "react";
import msg from "../../Assets/msg.png";
import classes from "../../Styles/Htmlpage/Htmlpage.module.css";
import SecSection from "./SecSection";
const TopSection = () => {
  return (
    <div class="container-fluid">
      <div className={classes.firstContainer}>
        <img src={msg} alt="msg" />
      </div>
      <div
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "2px solid #666",
              }}
              class="collapse navbar-collapse"
              id="navbarNav"
            >
              <ul
                class="navbar-nav"
                style={{ width: "50%", justifyContent: "space-between" }}
              >
                <li class="nav-item">
                  <p class="nav-link">Nav1</p>
                </li>

                <li class="nav-item">
                  <p class="nav-link">Nav2</p>
                </li>
                <li class="nav-item">
                  <p class="nav-link">Nav3</p>
                </li>

                <li class="nav-item">
                  <p class="nav-link">Nav4</p>
                </li>

                <li class="nav-item">
                  <p class="nav-link">Nav5</p>
                </li>

                <li class="nav-item">
                  <p class="nav-link">Nav6</p>
                </li>

                <li class="nav-item">
                  <p class="nav-link">Nav7</p>
                </li>

                <li class="nav-item">
                  <p class="nav-link">Nav8</p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <SecSection />
    </div>
  );
};

export default TopSection;
