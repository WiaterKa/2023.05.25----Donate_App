import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FNavbar from "./FNavbar";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState, useEffect } from "react";

function Fundarisers(props) {
  const [fundarisers, setFundarisers] = useState([]);

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
    } else {
      navigate("/error");
    }
  }, []);

  return (
    <section className="fundarisers">
      <FNavbar />
      <Slider {...settings} className="slider">
        {fundarisers.map((element) => {
          return (
            <div className="slid">
              <h1>{element.name}</h1>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

export default Fundarisers;
