import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
//import { Counter } from './Features/Counter/Counter';



function App() {
  //const user =  true
  return (
 <Router>
  <Routes>
  
    <Route exact path='/'element={<Home/>}/>
    <Route path='/products'element={<ProductList/>}/>
    <Route path='/product/:id'element={<Product/>}/>
    <Route path='/cart'element={<Cart/>}/>
    <Route path='/login'element={<Login/>}/>
    
    <Route path='/register'element={<Register/>}/>
  </Routes>
 </Router>
 
  );
}

export default App;
