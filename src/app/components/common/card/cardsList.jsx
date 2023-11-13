import React, { useState } from "react";
import Card from "./card";
import Pagination from "../pagination";
import { paginate } from "../../../utils/paginate";
import PropTypes from "prop-types";

const CardsList = ({ data, onDelete }) => {
  const pageSize = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const phoneCrop = paginate(data, currentPage, pageSize);

  return (
    <>
      <div className="container m-3 mx-auto">
        <div className="row">
          {phoneCrop.map((phone) => (
            <Card key={phone.id} {...phone} onDelete={onDelete} />
          ))}
        </div>
      </div>
      <div className="row">
        <Pagination
          smartphones={data}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

CardsList.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func,
};

export default CardsList;
