import './App.css';
import { MainRoutes } from './pages/MainRoutes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to={"/admin-dashboard"}>Admin</Link>
      <Link to={"/bag"}>Bag</Link>
      <Link to={"/products-men"}>Products</Link>
      <Link to={"/singleproduct/1"}>SingleProduct</Link>
      <Link to={"/cart"}>Cart</Link>
      <Link to={"/login"}>Login</Link>
      <MainRoutes/>
    </div>
  );

}

export default App;
