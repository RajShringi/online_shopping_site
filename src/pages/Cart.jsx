import { useContext } from "react";
import { ProductContext } from "../ProductContext";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";

function Cart() {
  const {
    cart,
    removeItemfromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = useContext(ProductContext);

  return (
    <div className="max-w-2xl mx-auto border my-4 p-4 rounded-md">
      {cart.map((item) => {
        return (
          <div
            key={item.id}
            className="flex justify-between items-center my-6 border-b py-2"
          >
            <div className="basis-[15%]">
              <img
                className="h-[150px] object-contain"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="basis-[70%]">
              <h4>{item.title}</h4>
              <p className="font-bold">${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div className="flex items-center my-2">
                <button
                  onClick={() => increaseItemQuantity(item.id)}
                  className="border rounded-md p-2 mr-6 shadow-inner border-gray-300"
                >
                  <AiOutlinePlus className="text-2xl" />
                </button>
                <button
                  disabled={item.quantity === 1 ? true : false}
                  onClick={() => decreaseItemQuantity(item.id)}
                  className="border rounded-md p-2 mr-6 shadow-inner border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed"
                >
                  <AiOutlineMinus className="text-2xl" />
                </button>
                <button
                  onClick={() => removeItemfromCart(item.id)}
                  className="border rounded-md p-2 mr-6 shadow-inner border-gray-300"
                >
                  <AiOutlineDelete className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <p className="font-bold text-sm flex justify-between items-center">
        <span>Subtotal:</span>
        <span>
          $
          {cart
            .reduce((acc, cur) => (acc = acc + cur.price * cur.quantity), 0)
            .toFixed(2)}
        </span>
      </p>
    </div>
  );
}

export default Cart;
