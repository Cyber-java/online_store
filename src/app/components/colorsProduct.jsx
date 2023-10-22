import React from "react";
import PropTypes from "prop-types";
const ColorsProduct = ({ item }) => {
  return (
    <>
      {item.color.map((iter) => (
        <span className={"badge m-1 bg-" + iter.color} key={iter._id}>
          {iter.name}
        </span>
      ))}
    </>
  );
};
ColorsProduct.propTypes = {
  item: PropTypes.object.isRequired,
};
export default ColorsProduct;
