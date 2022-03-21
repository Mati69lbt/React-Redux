import { Provider } from "react-redux";
import "./App.css";
import Contador from "./components/Contador";
import CrudApi from "./components/crudapi";
import ShoppingCart from "./components/ShoppingCart";
import TeoriaRedux from "./components/TeoriaRedux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div style={{ margin: "3%" }}>
        <h1>REDUX</h1>
        <hr />
        <CrudApi />
        <hr />
        <ShoppingCart />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <Contador />
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default App;
