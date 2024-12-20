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
      value: 1.7,
      currency: "USD",
      is_first_purchase: true,
      items: [
        {
          item_id: "E-GateKey",
          item_name: "E - Gate Key",
          affiliation: "Solo Leveling Unlimited",
          price: 1.7,
          quantity: 1,
        },
      ],
    });

    console.log("구매완료");
  };

  return (
    <div>
      <button type="button" onCanPlay={purchase}>
        Purchase
      </button>
    </div>
  );
};

export default Home;
