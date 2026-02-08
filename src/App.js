import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from './redux/cartSlice'


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
   <div style={{padding: '20px'}}>
     <h1>Redux Shopping Cart</h1>
     <button onClick={addItem}>Add Burger</button>

     <h2>Cart Items:</h2>
     {cart.map((item, index) => (
      <div key={item.id}>
        <span>{item.name}</span>
        <button onClick={() => removeItem(item.id)}>Remove</button>
      </div>
     ))}
   </div>
  );
}

export default App;