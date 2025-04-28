import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} — ${item.price} × {item.quantity}
              </li>
            ))}
          </ul>
          <hr />
          <p>
            <strong>Total Items:</strong> {totalItems}
          </p>
          <p>
            <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
