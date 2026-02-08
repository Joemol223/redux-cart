import { useDispatch, useSelector } from 'react-redux'
import { increaseQty, decreaseQty } from '../redux/cartSlice'

function Cart() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

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
  )
}

export default Cart
