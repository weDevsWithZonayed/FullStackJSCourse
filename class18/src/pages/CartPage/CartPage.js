import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartPage.css";
import { Container } from "../../components/common";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Container>
      <div className="cart-page">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <h4>{item.title}</h4>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-item-btn"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
};

export default CartPage;
