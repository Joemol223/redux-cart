import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  return (
    <div>
      <Header />
      <div style={{ padding: 20 }}>
        <ProductList />
        <Cart />
      </div>
    </div>
  )
}

export default App
