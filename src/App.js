import './App.css';
import CartItems from './Components/CartItems';
import Product from './Components/Product';
import ItemState from './context/ItemState';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Thanks from './Components/Thanks';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <ItemState>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Product />} />
            <Route exact path="/cart" element={<CartItems />} />
            <Route exact path="/thanks" element={<Thanks />} />
          </Routes>
        </ItemState>
      </Router>
    </div>
  );
}

export default App;
