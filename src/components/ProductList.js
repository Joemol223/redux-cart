import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

const products = [
  { id: 1, name: 'Burger' },
  { id: 2, name: 'Pizza' },
  { id: 3, name: 'Fries' }
]

function ProductList() {
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Products</h2>

      {products.map(product => (
        <div key={product.id}>
          <span>{product.name}</span>
          <button onClick={() => dispatch(addToCart(product))}>
            Add
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductList
