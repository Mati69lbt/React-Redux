import React from "react";

const Total = ({ cart }) => {
  var subtotal = cart.map((e) => e.price * e.quantity);
  var cant = cart.map((e) => e.quantity);
  var cantotal = 0;
  var total = 0;
  for (var i = 0; i < subtotal.length; i++) {
    total += subtotal[i];
  }
  for (var j = 0; j < cant.length; j++) {
    cantotal += cant[j];
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Total</h2>
      <h3>artículos comprados: {cantotal}</h3>
      <h3>$ {total.toFixed(3)}</h3>
    </div>
  );
};

export default Total;
