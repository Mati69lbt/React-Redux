import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, delFromCart } from "../actions/shoppingActions";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import Total from "./Total";

const ShoppingCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { products, cart } = state.shopping;
  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
      <h2>Carrito de Compras: React-Redux</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product, index) => (
          <ProductItem
            key={index}
            data={product}
            addToCart={() => dispatch(addToCart(product.id))}
          />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box grid-responsive">
        <button
          onClick={() => dispatch(clearCart())}
          style={{ width: "50%", height: "50%", alignSelf: "center" }}
        >
          Limpiar Carrito de Compras
        </button>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            delOneFromCart={() => dispatch(delFromCart(item.id))}
            delAllFromCart={() => dispatch(delFromCart(item.id, true))}
          />
        ))}
      </article>
      <article className="box grid-responsive">
        <Total cart={cart} />
      </article>
    </div>
  );
};

export default ShoppingCart;
