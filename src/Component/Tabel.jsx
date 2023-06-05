import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataTabel } from "../ProductSlice";
import _ from "lodash";

const Tabel = () => {
  const products = useSelector((state) => state.products.dataTabel.orders);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    dispatch(fetchDataTabel());
  }, [dispatch]);

  const pageCount = products ? Math.ceil(products.length / pageSize) : 0;
  const pages = _.range(1, pageCount + 1);

  let pagination;
  pagination = _(products).slice(0).take(pageSize).value();

  const paginationValue = (value) => {
    setCurrentPage(value);
    const startIndex = (value - 1) * pageSize;
    pagination = _(products).slice(startIndex).take(pageSize).value();
  };

  const handleChange = (value) => {
    const number = parseInt(value);
    setPageSize(number);
  };

  return (
    <div>
      {pagination ? (
        <div>
          <h1 className="text-center mt-2">Customer Data</h1>
          <table>
            <thead>
              <tr
                className="border border-2 border-dark p-1"
                style={{ backgroundColor: "#0D28A6", color: "white" }}
              >
                <th className="border border-2 p-1 border-dark">No</th>
                <th className="border border-2 p-1 border-dark">User Email</th>
                <th className="border border-2 p-1 border-dark">Car</th>
                <th className="border border-2 p-1 border-dark">Start Rent</th>
                <th className="border border-2 p-1 border-dark">Finish Rent</th>
                <th className="border border-2 p-1 border-dark">Price</th>
                <th className="border border-2 p-1 border-dark">Category</th>
              </tr>
            </thead>

            {pagination.map((value) => (
              <tr className="border border-2 p-1">
                <td className="border border-2 px-3 border-dark">{value.id}</td>
                <td className="border border-2 px-3 border-dark">
                  {value.User.email}
                </td>
                <td className="border border-2 px-3 border-dark">
                  {value?.Car?.name}
                </td>
                <td className="border border-2 px-3 border-dark">
                  {value.start_rent_at.substring(0, 10)}
                </td>
                <td className="border border-2 px-3 border-dark">
                  {value.finish_rent_at.substring(0, 10)}
                </td>
                <td className="border border-2 px-3 border-dark">
                  {value?.Car?.price}
                </td>
                <td className="border border-2 px-3 border-dark">
                  {value?.Car?.category}
                </td>
              </tr>
            ))}
          </table>
          <div className="float-start">
            <label>Limit:</label>
            <br />
            <select onChange={(e) => handleChange(e.target.value)}>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>
          <nav className="float-end mt-3">
            <ul className="pagination">
              {pages.map((value) => (
                <li
                  className={
                    value === currentPage ? "page-item active" : "page-item"
                  }
                >
                  <p
                    className="page-link"
                    onClick={() => paginationValue(value)}
                  >
                    {value}
                  </p>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};
export default Tabel;
