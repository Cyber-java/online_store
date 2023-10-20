import React from "react";
const TableHeader = ({ colums }) => {
  return (
    <thead>
      <tr>
        {Object.keys(colums).map((column) => (
          <th scope="col" key={column}>
            {colums[column].name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
