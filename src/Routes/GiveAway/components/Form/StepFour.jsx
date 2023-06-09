import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setStreet,
  setPc,
  setMobile,
  setDate,
  setCity,
  setHour,
  setMessage,
} from "../../../../app/features/form/formSlice";

function StepFour({}) {
  const dispatch = useDispatch();

  const street = useSelector((state) => state.form.street);
  const city = useSelector((state) => state.form.city);
  const pc = useSelector((state) => state.form.pc);
  const mobile = useSelector((state) => state.form.mobile);
  const date = useSelector((state) => state.form.date);
  const hour = useSelector((state) => state.form.hour);
  const message = useSelector((state) => state.form.message);

  return (
    <article className="step-four">
      <h2>
        Enter the address and date when the courier shall pick up the items
      </h2>

      <div className="form-container">
        <div className="form-one">
          <h3>Collection address:</h3>
          <div className="form-box">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              onChange={(e) => dispatch(setStreet(e.target.value))}
              value={street}
            />
          </div>
          <div className="form-box">
            <label htmlFor="city">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => dispatch(setCity(e.target.value))}
            />
          </div>
          <div className="form-box">
            <label htmlFor="postalCode">Postal code</label>
            <input
              type="text"
              value={pc}
              onChange={(e) => dispatch(setPc(e.target.value))}
            />
          </div>
          <div className="form-box">
            <label htmlFor="phoneNo">Phone number</label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => dispatch(setMobile(e.target.value))}
            />
          </div>
        </div>

        <div className="form-two">
          <h3>Collection date:</h3>
          <div className="form-box">
            <label htmlFor="date">Date</label>
            <input
              value={date}
              type="text"
              onChange={(e) => dispatch(setDate(e.target.value))}
            />
          </div>
          <div className="form-box">
            <label htmlFor="hour">Hour</label>
            <input
              type="text"
              value={hour}
              onChange={(e) => dispatch(setHour(e.target.value))}
            />
          </div>
          <div className="form-box">
            <label htmlFor="remarks">Notes to courier</label>
            <textarea
              onChange={(e) => dispatch(setMessage(e.target.value))}
              name="remarks"
              value={message}
              id="textarea"
              cols="30"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
    </article>
  );
}

export default StepFour;
