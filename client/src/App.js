import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './views/Home'
import Item from './views/Item'
import Cart from './views/Cart'
import NotFound from './views/NotFound'
import axios from 'axios'
import {set as setCart} from './actions/cartActions'
import {set as setItems} from './actions/itemActions'
import Navigation from './components/Navigation'
import store from './store'
import './App.css'

axios.defaults.baseURL = 'http://localhost:4000';

class App extends Component{
  async componentDidMount() {
    let products = await axios.get('/api/products')
    let orders = await axios.get('/api/orders')
    store.dispatch(setCart(orders.data))
    store.dispatch(setItems(products.data))
  }
  render(){
    return (
      <div className="App">
        <Router>
          <Provider store={store}>
            <Navigation/>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/cart' exact component={Cart}/>
              <Route path='/product/:id' component={Item}/>
              <Route path='*' component={NotFound}></Route>                
            </Switch>
          </Provider>
        </Router>
      </div>
    );
  }
}

export default App
