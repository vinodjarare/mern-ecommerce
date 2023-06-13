import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myOrders } from "../../../redux/action/orderAction";
const MyOrders = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);

  const [sortKey, setSortKey] = useState("id");
  const [sortOrder, setSortOrder] = useState("desc" > "asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleSort = useCallback(
    (key) => {
      if (key === sortKey) {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      } else {
        setSortKey(key);
        setSortOrder("asc");
      }
    },
    [sortKey, sortOrder]
  );

  const handlePageChange = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  const sortedOrders = useMemo(() => {
    const sortOrderModifier = sortOrder === "asc" ? 1 : -1;
    return [...orders].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) {
        return -1 * sortOrderModifier;
      }
      if (a[sortKey] > b[sortKey]) {
        return 1 * sortOrderModifier;
      }
      return 0;
    });
  }, [orders, sortKey, sortOrder]);

  const indexOfLastItem = useMemo(
    () => currentPage * itemsPerPage,
    [currentPage, itemsPerPage]
  );

  const indexOfFirstItem = useMemo(
    () => indexOfLastItem - itemsPerPage,
    [indexOfLastItem, itemsPerPage]
  );

  const currentItems = useMemo(
    () => sortedOrders.slice(indexOfFirstItem, indexOfLastItem),
    [sortedOrders, indexOfFirstItem, indexOfLastItem]
  );

  useEffect(() => {
    dispatch(myOrders());
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <h1 className="text-2xl font-bold text-gray-800 text-center my-3">
        My Orders
      </h1>
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-left font-bold bg-gray-100 border-b border-gray-300">
              <th
                className="px-6 py-3 text-xs uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort("id")}
              >
                Order Id {sortKey === "id" && sortOrder === "asc" && "▲"}
                {sortKey === "id" && sortOrder === "desc" && "▼"}
              </th>
              <th
                className="px-6 py-3 text-xs uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort("status")}
              >
                Status {sortKey === "status" && sortOrder === "asc" && "▲"}
                {sortKey === "status" && sortOrder === "desc" && "▼"}
              </th>
              <th
                className="px-6 py-3 text-xs uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort("qty")}
              >
                Quantity {sortKey === "qty" && sortOrder === "asc" && "▲"}
                {sortKey === "qty" && sortOrder === "desc" && "▼"}
              </th>
              <th
                className="px-6 py-3 text-xs uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort("amount")}
              >
                Amount {sortKey === "amount" && sortOrder === "asc" && "▲"}
                {sortKey === "amount" && sortOrder === "desc" && "▼"}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((order) => (
              <tr key={order._id}>
                <td className="px-6 py-4">{order._id}</td>
                <td className="px-6 py-4">{order.orderStatus}</td>
                <td className="px-6 py-4">{order?.orderItems.length}</td>
                <td className="px-6 py-4">{order.itemsPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <div className="text-sm text-gray-600">
          Showing {indexOfFirstItem + 1} to{" "}
          {Math.min(indexOfLastItem, sortedOrders.length)} of{" "}
          {sortedOrders.length} orders
        </div>
        <div className="flex">
          {Array.from(
            { length: Math.ceil(sortedOrders.length / itemsPerPage) },
            (_, i) => i + 1
          ).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`mx-1 px-3 py-1 rounded-md text-sm font-medium cursor-pointer ${
                currentPage === pageNumber
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
