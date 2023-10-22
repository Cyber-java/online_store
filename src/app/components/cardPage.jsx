import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../api";
import ColorsProduct from "./colorsProduct";

const CardPage = ({ cardId }) => {
  const history = useHistory();
  const [phone, setPhone] = useState();
  useEffect(() => {
    api.smartphones.getById(cardId).then((data) => setPhone(data));
  });
  const handleBackPage = () => {
    history.push("/catalog");
  };
  if (phone) {
    return (
      <>
        <h2>
          {phone.brand}
          {phone.title}
        </h2>
        <h2>
          Цена{phone.price}
          <span>{phone.currency}</span>
        </h2>
        <span>
          <ColorsProduct item={phone} />
        </span>
        <div>
          <button className="btn btn-sm btn-warning" onClick={handleBackPage}>
            Вернуться в каталог
          </button>
        </div>
      </>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default CardPage;
