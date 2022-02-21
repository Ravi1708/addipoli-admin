import React, { useEffect, useState } from "react";
import Order from "../components/Order";
import axios from "axios";

function NewOrders() {
  const [orders, Setorders] = useState();

  useEffect(async () => {
    const products = await axios.get(
      "https://api.addipoli-puttus.com/common/products"
    );
    Setorders(products.data);
  }, []);

  return (
    <div>
      {orders?.map((product, index) => {
        return <Order index={index} product={product} />;
      })}
    </div>
  );
}

export default NewOrders;
