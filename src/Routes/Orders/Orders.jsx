import React from "react";
import { useNavigate } from "react-router-dom";
import ORNavbar from "./ORNavbar";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect } from "react";
import { useState } from "react";
import OrderTab from "./OrderTab";

function Orders() {
  const [orderData, setOrderData] = useState([]);
  const orderCollection = collection(db, "Orders");
  const navigate = useNavigate();

  let filteredOrders = [];

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(orderCollection);
      const orders = querySnapshot.docs.map((doc) => doc.data());
      filteredOrders = orders.filter(
        (element) => element.user === localStorage.user
      );
      setOrderData(filteredOrders);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (localStorage.user) {
      getData();
      console.log(filteredOrders);
    } else {
      navigate("/error");
    }
  }, []);

  return (
    <section className="orders">
      <ORNavbar />
      <div className="orders-container">
        <div className="txt-container">
          <h1>Hello {localStorage.user}</h1>
          <img src="/Decoration.svg" alt="decoration-svg" />

          {orderData.length !== 0 ? (
            <h2>
              Congratulations! You have already made {orderData.length}{" "}
              donations.
              <br />
              Please see the details below.
            </h2>
          ) : (
            <>
              <h2>Ups... It seems you haven't made any donation yet.</h2>
              <button
                className="donate-btn"
                onClick={() => navigate("/giveaway")}
              >
                Donate!
              </button>
            </>
          )}

          <div className="table-orders">
            {orderData != [] &&
              orderData.map((element) => {
                return <OrderTab element={element} />;
              })}
          </div>
        </div>
      </div>
      <div className="img-container"> </div>
    </section>
  );
}

export default Orders;
