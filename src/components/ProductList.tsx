import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { addItemToCart } from '../features/cart/cartSlice';

const ProductList = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = (product: {
    id: number;
    name: string;
    price: number;
  }) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} — ${product.price}
            <button
              style={{ marginLeft: '10px' }}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
