import logo from './logo.svg';
import './App.css';
import Main from "./Main"
import Category from './Category';
import Products from './Products';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route, Routes,Link} from "react-router-dom";
import Categorypage from './Categorypage';
import Initialproduct from './Initialproduct';
import Cart from './Cart';
function App() {
  
  const changeproducts =()=>{

  }

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path={'/category'}>
          <Header />
          
          <Categorypage />
        </Route>
       <Route path={'/cart'}>
        <Cart />
       </Route>
      <Route path={'/'}>
      <Header />
      
      <Initialproduct />
      </Route>
      </Switch> 
    </div>
    </Router>
  );
}

export default App;
