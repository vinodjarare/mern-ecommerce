import { useSelector, useDispatch } from "react-redux";

const useCart = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.cart);

  const onOpen = () => {
    dispatch({ type: "CART_OPEN" });
  };
  const onClose = () => {
    dispatch({ type: "CART_CLOSE" });
  };

  return { isOpen, onClose, onOpen };
};

export default useCart;
