import React, { useState, useEffect } from "react";
import api from "../api";
import Table from "./table";

const ProductsList = () => {
  const [smartphones, setSmartphones] = useState();
  useEffect(() => {
    api.smartphones.fetchAll().then((data) => setSmartphones(data));
  }, []);
  const handleDelete = (phoneId) => {
    setSmartphones(smartphones.filter((phone) => phone.id !== phoneId));
  };
  const colums = {
    stamp: { path: "name", name: "марка" },
    model: { path: "model", name: "модель" },
    color: { path: "color", name: "цвет" },
    price: { path: "price", name: "цена" },
    currency: { path: "currency", name: "валюта" },
  };

  if (smartphones) {
    return (
      <>
        <Table colums={colums} data={smartphones} onDelete={handleDelete} />
      </>
    );
  }
  return <h2>Loading...</h2>;
};

export default ProductsList;
