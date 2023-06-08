import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FNavbar from "./FNavbar";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Fundarisers(props) {
  const [fundarisers, setFundarisers] = useState([]);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const orderCollection = collection(db, "Fundarisers");

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(orderCollection);
      const orders = querySnapshot.docs.map((doc) => doc.data());
      setFundarisers(orders);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (localStorage.user) {
      getData();
      console.log(fundarisers);
    } else {
      navigate("/error");
    }
  }, []);

  return (
    <section className="fundarisers">
      <div className="img-container"></div>
      <FNavbar />
      {fundarisers.length > 0 && (
        <Slider {...settings} className="slider">
          {fundarisers.map((element) => {
            return (
              <div className="slide">
                <h1>{element.name}</h1>
                <div className="details">
                  <h2>{element.date}</h2>
                  <h2>{element.place}</h2>
                </div>
                <h3>What should you bring?</h3>
                <p>{element.needs}</p>
              </div>
            );
          })}
        </Slider>
      )}
    </section>
  );
}

export default Fundarisers;
