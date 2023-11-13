import React from "react";
import { useParams } from "react-router-dom";
import CardPage from "../components/common/card/cardPage";
import Products from "../components/common/page/products";

const Catalog = () => {
  const params = useParams();
  const { cardId } = params;

  return <>{cardId ? <CardPage cardId={cardId} /> : <Products />}</>;
};

export default Catalog;
