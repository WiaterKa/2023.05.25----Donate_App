import React from "react";
import handleRedirection from "../../../helpers/handleRedirection";
import { useNavigate } from "react-router-dom";

function ProjectInfo(props) {
  const navigate = useNavigate();
  return (
    <section className="project-info" id="project-info">
      <div className="key-takeaways">
        <div className="info-box">
          <h2>10</h2>
          <h3>BAGS DONATED</h3>
          <p>
            We collect donated items in 60 liter bags. Don't let the number of
            bags alone confuse you - they hold a lot of things, and each of them
            supports the organization's dependents!
          </p>
        </div>

        <div className="info-box">
          <h2>5</h2>
          <h3>SUPPORTED ORGANISATIONS</h3>
          <p>
            We support more than a dozen organizations, and their number is
            growing all the time. If the organization you would like to help is
            not on our list - add it to our database!
          </p>
        </div>

        <div className="info-box">
          <h2>7</h2>
          <h3>ORGANISED FUNDARISERS</h3>
          <p>
            Regardless of collecting donations from donors via courier, we also
            organize periodic fundraisers - log in to learn more about them!
          </p>
        </div>
      </div>

      <div className="steps-header">
        <h2>All it takes is 4 simple steps</h2>
        <img src="/Decoration.svg" alt="decoration-svg" />
      </div>

      <div className="steps-container">
        <div className="step-box">
          <div className="img-container one"></div>
          <p className="p-heading-step">Choose things</p>
          <div className="steps-line"></div>
          <p className="p-p-step">clothes, toys, equipment and others</p>
        </div>
        <div className="step-box">
          <div className="img-container two"></div>
          <p className="p-heading-step">Pack them</p>
          <div className="steps-line"></div>
          <p className="p-p-step">use bags for garbage</p>
        </div>
        <div className="step-box">
          <div className="img-container three"></div>
          <p className="p-heading-step">Choose recipient</p>
          <div className="steps-line"></div>
          <p className="p-p-step">choose a trusted place</p>
        </div>
        <div className="step-box">
          <div className="img-container four"></div>
          <p className="p-heading-step">Book a courier</p>
          <div className="steps-line"></div>
          <p className="p-p-step">courier will arrive at a convenient time</p>
        </div>
      </div>

      <div className="steps-footer">
        <button onClick={() => handleRedirection()}>DONATE</button>
      </div>
    </section>
  );
}

export default ProjectInfo;
