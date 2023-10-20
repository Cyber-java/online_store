import React from "react";
import PropTypes from "prop-types";

const TableBody = ({ data, onDelete }) => {
  return (
    <>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.brand}</td>
            <td>{item.title}</td>
            <td>
              {item.color.map((iter) => (
                <span className={"badge m-1 bg-" + iter.color} key={iter._id}>
                  {iter.name}
                </span>
              ))}
            </td>
            <td>{item.price}</td>
            <td>{item.currency}</td>
            <td>
              <button
                className="btn btn-danger mr-2"
                onClick={() => onDelete(item.id)}
              >
                Удалить
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default TableBody;
