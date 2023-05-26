import React from "react";

function ProjectInfo(props) {
  return (
    <section className="project-info" id="project-info">
      <div className="key-takeaways">
        <div className="info-box">
          <h2>10</h2>
          <h3>ODDANYCH WORKÓW</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste neque
            culpa, sunt distinctio quia in rerum minima. Facere, ad possimus!
          </p>
        </div>

        <div className="info-box">
          <h2>5</h2>
          <h3>WSPARTYCH ORGANIZACJI</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste neque
            culpa, sunt distinctio quia in rerum minima. Facere, ad possimus!
          </p>
        </div>

        <div className="info-box">
          <h2>7</h2>
          <h3>ZORGANIZOWANYCH ZBIÓREK</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste neque
            culpa, sunt distinctio quia in rerum minima. Facere, ad possimus!
          </p>
        </div>
      </div>

      <div className="steps-header">
        <h2>Wystarczą 4 proste kroki</h2>
        <img src="public/Decoration.svg" alt="decoration-svg" />
      </div>

      <div className="steps-container">
        <div className="step-box">
          <div className="img-container one"></div>
          <p className="p-heading-step">Wybierz rzeczy</p>
          <div className="steps-line"></div>
          <p className="p-p-step">ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="step-box">
          <div className="img-container two"></div>
          <p className="p-heading-step">Spakuj je</p>
          <div className="steps-line"></div>
          <p className="p-p-step">skorzystaj z worków na śmieci</p>
        </div>
        <div className="step-box">
          <div className="img-container three"></div>
          <p className="p-heading-step">Zdecyduj komu chcesz pomóc</p>
          <div className="steps-line"></div>
          <p className="p-p-step">wybierz zaufane miejsce</p>
        </div>
        <div className="step-box">
          <div className="img-container four"></div>
          <p className="p-heading-step">Zamów kuriera</p>
          <div className="steps-line"></div>
          <p className="p-p-step">kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>

      <div className="steps-footer">
        <button>ODDAJ RZECZY</button>
      </div>
    </section>
  );
}

export default ProjectInfo;
