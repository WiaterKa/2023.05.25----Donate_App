import { useDispatch, useSelector } from "react-redux";
import {
  setAdressee,
  setLocation,
  setOrganisation,
} from "../../../../app/features/form/formSlice";

function StepThree({}) {
  const dispatch = useDispatch();
  const adressee = useSelector((state) => state.form.adressee);
  const location = useSelector((state) => state.form.location);

  return (
    <article className="step-three">
      <label className="location-lbl" htmlFor="location">
        Location
      </label>

      <select
        name="location"
        id="location"
        value={location}
        onChange={(e) => {
          dispatch(setLocation(e.target.value));
        }}
      >
        <option value="0">-- choose --</option>
        <option value="Warszawa">Warszawa</option>
        <option value="Kraków">Kraków</option>
        <option value="Katowice">Katowice</option>
        <option value="Wrocław">Wrocław</option>
        <option value="Poznań">Poznań</option>
        <option value="Szczecin">Szczecin</option>
        <option value="Gdańsk">Gdańsk</option>
        <option value="Olsztyn">Olsztyn</option>
        <option value="Lublin">Lublin</option>
        <option value="Rzeszów">Rzeszów</option>
      </select>

      <h3>Who do you want to help?</h3>
      <div className="adressee">
        <p
          className={adressee === "kids" ? "active" : ""}
          onClick={() => dispatch(setAdressee("kids"))}
        >
          kids
        </p>
        <p
          className={adressee === "lonely moms" ? "active" : ""}
          onClick={() => dispatch(setAdressee("lonely moms"))}
        >
          single moms
        </p>
        <p
          className={adressee === "homeless" ? "active" : ""}
          onClick={() => dispatch(setAdressee("homeless"))}
        >
          homeless
        </p>
        <p
          className={adressee === "disabled" ? "active" : ""}
          onClick={() => dispatch(setAdressee("disabled"))}
        >
          disabled people
        </p>
        <p
          className={adressee === "eldery people" ? "active" : ""}
          onClick={() => dispatch(setAdressee("eldery people"))}
        >
          eldery people
        </p>
      </div>

      <label className="organisation-lbl" htmlFor="organisation">
        Enter the name of the desired organization (optional)
      </label>
      <input
        type="text"
        onChange={(e) => dispatch(setOrganisation(e.target.value))}
      />
    </article>
  );
}

export default StepThree;
