import React from "react";
import { fundations } from "../../../../helpers/OrganisationList";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../../../../app/features/counter/counterSlice";
import { useEffect } from "react";

function Fundations(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  let number = 0;
  const pages = [];

  useEffect(() => {
    dispatch(set(0));
    console.log(count);
  }, []);

  let x = 0;
  let y = 3;
  for (let i = 0; i < 3; i++) {
    pages.push(fundations.data.slice(x, y));
    x = x + 3;
    y = y + 3;
  }

  return (
    <>
      <div className="organisations-box">
        {Array.from(pages[count]).map((element) => (
          <div className="organisation-container" key={element.name}>
            <div className="details">
              <h3>{element.name}</h3>
              <p>{element.description}</p>
            </div>
            <p className="needs">{element.needs}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="pages-box">
          {pages.map((page, index) => {
            number++;
            return (
              <p
                className={count === index ? "activePage" : ""}
                key={index}
                onClick={() => dispatch(set(index))}
              >
                {number}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Fundations;
