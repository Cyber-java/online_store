import React, { useState } from "react";
import Card from "./card";
import Pagination from "./pagination";

const CardsList = ({ data, onDelete }) => {
  const pageSize = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    if (items) {
      return [...items].splice(startIndex, pageSize);
    } else {
      return <h1>not items</h1>;
    }
  };
  const phoneCrop = paginate(data, currentPage, pageSize);
  console.log(phoneCrop);

  return (
    <>
      <div className="container">
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
