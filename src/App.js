import './App.css';
import AllProducts from './components/AllProducts';

function App() {
  return (
    <div className="container">
      <AllProducts />
      <h2>Cart Items</h2>
      <div className="cart-page">
      </div>
    </div>
  );
}

export default App;
