import React from "react";
import ColorsProduct from "./colorsProduct";
const Card = ({ onDelete, ...phone }) => {
  return (
    <div className="col-4 mb-2">
      <div className="card" style={{ height: "100%" }}>
        <div className="card-body">
          <h5 className="card-title">
            {phone.brand} {phone.title}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Цена {phone.price}
            <span className="m-2">{phone.currency}</span>
          </h6>
          <span>
            Цвет <ColorsProduct item={phone} />
          </span>
          <div>
            <button className="btn btn-info btn-sm m-2">Добавить</button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(phone.id)}
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
