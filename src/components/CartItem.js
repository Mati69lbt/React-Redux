import React from "react";

const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
  let { id, name, price, quantity } = data;

  ///* set de juego *5 - Stereo*7 - aire*3 - tablet*3 */

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>{` $ ${price} x ${quantity} = $ ${(price * quantity).toFixed(
        3
      )} mil`}</h5>

      <button onClick={() => delOneFromCart(id)} style={{ margin: "5px" }}>
        Eliminar uno
      </button>
      <button onClick={() => delAllFromCart(id, true)}>Eliminar Todos</button>
    </div>
  );
};

export default CartItem;
