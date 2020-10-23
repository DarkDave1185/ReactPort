import React from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <div className="about">
      <information>
        <div className="kard-box1">
          <div className="icon">
            <FontAwesomeIcon icon="chalkboard-teacher" className="gcap" />
          </div>
          <div className="info">
            <ul>
              <div className="list1">
                <li>
                  <span>Learning</span>
                </li>
                <li>tincidunt</li>
                <li>aliquam</li>
                <li>facilisi</li>
                <li>fermentum</li>
                <li>volutpat</li>
                <li>semper</li>
              </div>
              <div className="list2">
                <li>elementum</li>
                <li>pellentesque</li>
                <li>convallis</li>
                <li>rhoncus</li>
                <li>rhoncus</li>
                <li>rhoncus</li>
                <li>rhoncus</li>
              </div>
            </ul>
          </div>
        </div>
        <div className="kard-box2"></div>
        <div className="about-box3">
          <h3>David G.S. Dawkins</h3>
          <h5>FullStack Web Developer</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
            vestibulum lectus mauris ultrices eros in cursus turpis. Viverra
            orci sagittis eu volutpat odio facilisis mauris sit. Diam quam nulla
            porttitor massa id. Vel quam elementum pulvinar etiam. Volutpat sed
            cras ornare arcu dui. Egestas dui id ornare arcu odio ut sem.
            Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Sit
            amet nisl purus in. Tellus rutrum tellus pellentesque eu tincidunt
            tortor. Sagittis vitae et leo duis ut diam. Eu consequat ac felis
            donec et. Morbi quis commodo odio aenean sed. Et netus et malesuada
            fames. Amet nisl suscipit adipiscing bibendum est ultricies.
          </p>
        </div>
        <div className="about-box4"></div>
        <div className="about-box5"></div>
      </information>
    </div>
  );
}

export default About;
