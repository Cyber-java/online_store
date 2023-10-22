import React from "react";
import { useParams } from "react-router-dom";
import CardPage from "../components/cardPage";
import Products from "../components/products";

const Catalog = () => {
  const params = useParams();
  const { cardId } = params;

  return <>{cardId ? <CardPage cardId={cardId} /> : <Products />}</>;
};

export default Catalog;
