import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { addItemToCart, removeItemFromCart } from '../features/cart/cartSlice';

const ProductList = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = (product: {
    id: number;
    name: string;
    price: number;
  }) => {
    dispatch(addItemToCart(product));
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => {
          const cartItem = cartItems.find((item) => item.id === product.id);
          const quantity = cartItem ? cartItem.quantity : 0;
          return (
            <li key={product.id}>
              {product.name} — ${product.price}
              <button
                style={{ marginLeft: '10px' }}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart{quantity > 0 && ` (${quantity})`}
              </button>
              {quantity > 0 && (
                <button
                  style={{ marginLeft: '10px' }}
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  Remove from Cart
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
