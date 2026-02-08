import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/productSlice'
import { addToCart } from '../redux/cartSlice'

function ProductList() {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) return <p>Loading products...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h2>Products</h2>

      {items.map(product => (
        <div key={product.id}>
          <span>{product.title}</span>
          <button
            onClick={() =>
              dispatch(addToCart({ id: product.id, name: product.title }))
            }
          >
            Add
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductList
