import React, { useState } from "react";
import Card from "./card";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

const CardsList = ({ data, onDelete }) => {
  const pageSize = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const phoneCrop = paginate(data, currentPage, pageSize);

  return (
    <>
      <div className="container m-3">
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

export default CardsList;
