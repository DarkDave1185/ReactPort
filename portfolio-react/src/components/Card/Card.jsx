import React from "react";
import "./card.css";

function Card() {
  return (
    <div className="container">
      <mainbody>
        <div className="cards box1">
          <div className="face face1">
            <div className="content">
              <img src="./images/covidTrivia.PNG" alt="p:A" />
              <h3>Project Apollo</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <a href="https://thawing-everglades-24119.herokuapp.com/">Link</a>
            </div>
          </div>
        </div>
        <div className="cards box2">
          <div className="face face1">
            <div className="content">
              <img src="./images/passwordGen.PNG" alt="" />
              <h3>PasswordGen</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <a href="https://darkdave1185.github.io/randomPasswordGenerator/">
                Link
              </a>
            </div>
          </div>
        </div>
        <div className="cards box3">
          <div className="face face1">
            <div className="content">
              <img src="./images/p-Athena.PNG" alt="" />
              <h3>Project Athena</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <a href="https://zachsatt.github.io/Athena/">Link</a>
            </div>
          </div>
        </div>
        <div className="cards box4">
          <div className="face face1">
            <div className="content">
              <img src="./images/portfolio.PNG" alt="" />
              <h3>1st Portfolio</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <a href="https://darkdave1185.github.io/portfolioTemplate/index.html">
                Link
              </a>
            </div>
          </div>
        </div>
        <div className="cards box5">
          <div className="face face1">
            <div className="content">
              <img src="#" alt="" />
              <h3>Employee Tracker</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <a href="https://github.com/DarkDave1185/employeeTracker">Link</a>
            </div>
          </div>
        </div>
        <div className="cards box6">
          <div className="face face1">
            <div className="content">
              <img src="#" alt="" />
              <h3>Notes</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <a href="https://gentle-stream-45327.herokuapp.com/">Link</a>
            </div>
          </div>
        </div>
      </mainbody>
    </div>
  );
}

export default Card;
