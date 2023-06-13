import CheckoutForm from "./CheckOutForm";
import CheckOutProduct from "./CheckOutProduct";

const Checkout = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-[1024px] mx-auto min-h-[calc(100vh-64px)]">
      <div className="min-h-[calc(100vh-100px)] w-3/5 md:border-r-2 border-gray-600">
        <CheckoutForm />
      </div>
      <div className="h-full w-2/5 box-border px-5 md:px-8">
        <CheckOutProduct />
      </div>
    </div>
  );
};

export default Checkout;
