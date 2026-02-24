import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import { init } from "ityped";
import manOnTable from "../../assests/images/manOnTable.svg";

export default function Greeting() {
  return (
    <Fade
      bottom
      duration={1000}
      distance="40px"
      onReveal={() => {
        const first = document.querySelector("#one");
        if (first) {
          init(first, {
            showCursor: true,
            strings: ["Gaurav kumar", ".../gg60473", ".../Gaurav", ".../kumar"],
            typeSpeed: 100,
          });
        }
      }}
    >
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                <span className="wave-emoji">{emoji("🙋‍♂️")}</span>{" "}
                {greeting.title}{" "}
                <ul className="typingClass">
                  <li>
                    <span id="one" className=""></span>
                  </li>
                </ul>
              </h1>

              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {/* <Button text="See my resume" newTab={true} href={greeting.resumeLink} /> */}
              </div>
            </div>
          </div>

          <div className="greeting-image-div">
            <img src={manOnTable} alt="saad sitting on table" />
          </div>
        </div>
      </div>
    </Fade>
  );
}
