import React, { useState, useEffect } from "react";
import CardsList from "./cardsList";
import api from "../api";

const Products = () => {
  const [smartphones, setSmartphones] = useState();
  useEffect(() => {
    api.smartphones.fetchAll().then((data) => setSmartphones(data));
  }, []);
  const handleDelete = (phoneId) => {
    setSmartphones(smartphones.filter((phone) => phone.id !== phoneId));
  };
  if (smartphones) {
    return (
      <>
        <CardsList data={smartphones} onDelete={handleDelete} />
      </>
    );
  }
  return <h2>Loading...</h2>;
};

export default Products;
