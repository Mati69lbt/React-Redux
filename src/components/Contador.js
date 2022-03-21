import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  div5,
  divramdom,
  multi5,
  multiramdom,
  reset,
  restar,
  restar5,
  restaramdom,
  sumar,
  sumar5,
  sumaramdom,
} from "../actions/contadorActions";

const Contador = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Redux</h2>
      <nav>
        <button onClick={() => dispatch(divramdom())}>/ Ramdom</button>
        <button onClick={() => dispatch(div5())}>/5</button>
        <button onClick={() => dispatch(restaramdom())}>- Ramdom</button>
        <button onClick={() => dispatch(restar5())}>-5</button>
        <button onClick={() => dispatch(restar())}>-1</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <button onClick={() => dispatch(sumar())}>+1</button>
        <button onClick={() => dispatch(sumar5())}>+5</button>
        <button onClick={() => dispatch(sumaramdom())}>+ Ramdom</button>
        <button onClick={() => dispatch(multi5())}>*5</button>
        <button onClick={() => dispatch(multiramdom())}>* Ramdom</button>
      </nav>
      <h3 style={{ fontSize: "20px" }}>{Math.floor(state.contador)}</h3>
    </div>
  );
};

export default Contador;
