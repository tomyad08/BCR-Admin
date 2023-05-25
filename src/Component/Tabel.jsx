import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataTabel } from "../ProductSlice";

const Tabel = () => {
  const products = useSelector((state) => state.products.dataTabel.orders);
  const dispatch = useDispatch();
  console.log(products);
  useEffect(() => {
    dispatch(fetchDataTabel());
  }, [dispatch]);

  return (
    <div>
      {products ? (
        <div>
          <h1 className="text-center mt-2">Customer Data</h1>
          <table>
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

            {products.map((value) => (
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
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};
export default Tabel;
