import React, { useState } from "react";

const products = [
  { id: 1, name: "Product 1", price: 23 },
  { id: 2, name: "Product 2", price: 45 },
];

export default function App10() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    const item = cart.find((p) => p.id === id);
    if (item.qty === 1) {
      setCart(cart.filter((p) => p.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>App10 Assignment</h2>

      <h3>Products</h3>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price} -{" "}
            <button onClick={() => addToCart(product)}>Add</button>
          </li>
        ))}
      </ol>

      <hr />

      <h3>My Cart</h3>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ol>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} -{" "}
              <button onClick={() => decreaseQty(item.id)}>-</button>{" "}
              {item.qty}{" "}
              <button onClick={() => increaseQty(item.id)}>+</button> - $
              {item.price * item.qty}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
