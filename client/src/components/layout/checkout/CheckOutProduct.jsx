import { useSelector } from "react-redux";
const CheckOutProduct = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 100;

  const tax = subtotal * 0.01;

  const totalPrice = subtotal + tax + shippingCharges;

  const data = {
    subtotal,
    shippingCharges,
    tax,
    totalPrice,
  };

  sessionStorage.setItem("orderInfo", JSON.stringify(data));
  return (
    <div className="flex flex-col gap-4 h-[calc(100vh-100px)] pt-10">
      <div>
        {cartItems.map((product) => (
          <div
            className=" flex flex-col gap-2 px-4 py-2 bg-white first-of-type:rounded-t-lg last-of-type:rounded-lg  shadow-md h-fit"
            key={product.id}
          >
            <div className="flex justify-between items-center">
              <div className="relative border rounded-lg h-[80px] w-[80px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-lg w-full h-full"
                />
                <span className="absolute top-0 right-0 h-[20px] w-[20px] rounded-full bg-primary-700 text-xs text-white flex justify-center items-center translate-x-[50%] -translate-y-[50%]">
                  {product.quantity}
                </span>
              </div>
              <div className="flex  justify-start h-[80px] flex-col">
                <h4 className="text-lg font-semibold ">{product.name}</h4>
                <p className="font-extralight">₹{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center px-3">
          <h4 className="text-lg font-medium">SubTotal</h4>
          <p>₹{subtotal}</p>
        </div>
        <div className="flex justify-between items-center px-3">
          <h4 className="text-lg font-medium">Shipping</h4>
          <p>₹{shippingCharges}</p>
        </div>
        <div className="flex justify-between items-center px-3">
          <h4 className="text-lg font-medium">Tax</h4>
          <p>₹{tax}</p>
        </div>
        <div className="flex justify-between items-center px-3">
          <h4 className="text-lg font-medium">Total</h4>
          <p>₹{totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckOutProduct;
