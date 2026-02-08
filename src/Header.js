import { useSelector } from 'react-redux'

function Header() {
  const totalItems = useSelector(state =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  )

  return (
    <div style={{ padding: 10, borderBottom: '1px solid #ccc' }}>
      <h2>🛒 Cart ({totalItems})</h2>
    </div>
  )
}

export default Header
