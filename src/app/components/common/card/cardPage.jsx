import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../../api";
import ColorsProduct from "../../ui/colorsProduct";
import PropTypes from "prop-types";

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
        <div>
          <h2>
            {phone.brand}
            <span className="m-2">{phone.title}</span>
          </h2>
          <h4>
            Цена: {phone.price}
            <span className="m-2">{phone.currency}</span>
          </h4>
          <span>
            Цвет <ColorsProduct item={phone} />
          </span>
          <h4>Размер экрана: {phone.screen_size}</h4>
          <h4>Частота обновления: {phone.update_frequency}</h4>
          <h4>Батарея: {phone.battery_capacity}</h4>
          <h5>Стандарт связи: {phone.communication_standard}</h5>
          <div>
            <button className="btn btn-sm btn-warning" onClick={handleBackPage}>
              Вернуться в каталог
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

CardPage.propTypes = {
  cardId: PropTypes.string.isRequired,
};
export default CardPage;
