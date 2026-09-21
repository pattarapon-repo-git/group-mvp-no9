import { useState } from "react";
import { CartContext } from "./CartContext";
import * as cartServices from "../../services/cartServices";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = async (product) => {
    try {
      // อัปเดต State หน้าบ้านเพื่อให้ UI ตอบสนองทันที
      setCartItems((prevItems) => {
        const existing = prevItems.find((item) => item.id === product.id || item._id === product._id);
        if (existing) {
          return prevItems.map((item) =>
            (item.id === product.id || item._id === product._id)
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
        }
        return [...prevItems, { ...product, quantity: 1 }];
      });

      // ยิง API ไปอัปเดตที่หลังบ้าน
      const productId = product._id || product.id;
      const price = product.price || 0;
      await cartServices.addToCart(productId, 1, price);

      alert(`✅ เพิ่ม "${product.name}" ลงตะกร้าแล้ว!`);
    } catch (error) {
      console.error("Failed to add to cart on backend", error);
    }
  };

  const updateQuantity = async (id, change) => {
    let newQuantity = 0;
    
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id || item._id === id) {
          const newQty = item.quantity + change;
          newQuantity = newQty;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }),
    );

    if (newQuantity > 0) {
      try {
        await cartServices.updateCartItem(id, newQuantity);
      } catch (error) {
        console.error("Failed to update cart quantity on backend", error);
      }
    }
  };

  const removeItem = async (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => (item.id !== id && item._id !== id)));
    try {
      await cartServices.removeCartItem(id);
    } catch (error) {
      console.error("Failed to remove item from backend cart", error);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    // Note: To truly clear on backend, an API route for clear cart is needed, 
    // but we omit it here as it was not in the Task 8 spec.
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddToCart,
        onAddToCart: handleAddToCart,
        updateQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
