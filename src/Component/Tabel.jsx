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
            <tr className="border border-1 p-1">
              <th className="border border-1 p-1">No</th>
              <th className="border border-1 p-1">User Email</th>
              {/* <th className="border border-1 p-1">Car</th> */}
              <th className="border border-1 p-1">Start Rent</th>
              <th className="border border-1 p-1">Finish Rent</th>
              {/* <th className="border border-1 p-1">Price</th>
              <th className="border border-1 p-1">Category</th> */}
            </tr>

            {products.map((value) => (
              <tr className="border border-1 p-1">
                <td className="border border-1 px-3">{value.id}</td>
                <td className="border border-1 px-3">{value.User.email}</td>
                {/* <td className="border border-1 px-3">{value.Car.name}</td> */}
                <td className="border border-1 px-3">
                  {value.start_rent_at.substring(0, 10)}
                </td>
                <td className="border border-1 px-3">
                  {value.finish_rent_at.substring(0, 10)}
                </td>
                {/* <td className="border border-1 px-3">{value.Car.price}</td>
                <td className="border border-1 px-3">{value.Car.category}</td> */}
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
