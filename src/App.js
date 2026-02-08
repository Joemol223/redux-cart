import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, increaseQty,decreaseQty } from './redux/cartSlice'
import Header from './Header';

const products = [
  { id: 1, name: 'Burger' },
  { id: 2, name: 'Pizza' },
  { id: 3, name: 'Fries' }
]

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addItem = () => {
    dispatch(addToCart({id:1,  name: 'Burger' }));
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  }
  return (
    <div>
      <Header />
   <div style={{padding: '20px'}}>
      <h1>Products</h1>

        {products.map(product => (
          <div key={product.id}>
            <span>{product.name}</span>
            <button
              onClick={() => dispatch(addToCart(product))}
            >
              Add
            </button>
          </div>
        ))}
     <h1>Redux Shopping Cart</h1>
     <button onClick={addItem}>Add Burger</button>
      
     <h2>Cart Items:</h2>
  
     {cart.map(item => (
          <div key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => dispatch(decreaseQty(item.id))}>➖</button>
            <span> {item.quantity} </span>
            <button onClick={() => dispatch(increaseQty(item.id))}>➕</button>
             {/* <button onClick={() => removeItem(item.id)}>Remove</button> */}
      </div>
        ))}
   </div>
   </div>
  );
}

export default App;