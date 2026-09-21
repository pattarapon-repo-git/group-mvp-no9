import apiClient from "../api/apiClient";

const CART_PATH = "/cart";

// NOTE: เนื่องจากยังไม่มีระบบ Login เราจึงจำลอง userId ไว้สำหรับการทดสอบ
const DUMMY_USER_ID = "60c72b2f5f1b2c001f3b2a1a"; 

export const addToCart = (productId, quantity, price) => {
  return apiClient.post(CART_PATH, {
    userId: DUMMY_USER_ID,
    product_id: productId,
    product_quantity: quantity,
    product_price: price
  });
};

export const updateCartItem = (productId, quantity) => {
  return apiClient.put(`${CART_PATH}/${productId}`, {
    userId: DUMMY_USER_ID,
    product_quantity: quantity
  });
};

export const removeCartItem = (productId) => {
  return apiClient.delete(`${CART_PATH}/${productId}`, {
    data: { userId: DUMMY_USER_ID }
  });
};
