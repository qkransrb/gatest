"use client";

import { useEffect } from "react";
import ReactGA from "react-ga4";
import { v4 as uuid } from "uuid";

const Home = () => {
  useEffect(() => {
    ReactGA.initialize("G-52QQJBVETH");
    console.log("initialize");
  }, []);

  const purchase = () => {
    const transactionId = uuid();

    ReactGA.gtag("event", "purchase", {
      transaction_id: transactionId,
      affiliation: "SOLO LEVELING",
      value: "1.7",
      currency: "USD",
      tax: "0",
      shipping: "0",
      items: [
        {
          id: "E-GATEKEY",
          name: "E - Gate Key",
          list_name: "GATEKEY",
          brand: "SLU",
          category: "GATE",
          variant: "NONE",
          list_position: "E",
          quantity: "1",
          price: "1.7",
        },
      ],
    });

    console.log("구매완료");
  };

  return (
    <div>
      <button type="button" onClick={purchase}>
        Purchase
      </button>
    </div>
  );
};

export default Home;
