import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import PropTypes from "prop-types";

const Table = ({ colums, onDelete, data }) => {
  return (
    <>
      <table className="table table-borderless">
        <TableHeader colums={colums} />
        <TableBody data={data} onDelete={onDelete} />
      </table>
    </>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default Table;
