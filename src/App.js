import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';
import Success from './screens/Success.js';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/createUser' element={<Signup />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path="/myorder" element={<MyOrder />} />
            <Route exact path="/success" element={<Success />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
