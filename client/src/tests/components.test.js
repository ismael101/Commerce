import {configure, mount} from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {Router, Route} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {set as setCart} from '../actions/cartActions'
import {set as setItem} from '../actions/itemActions'
import store from '../store'
import Navigation from '../components/Navigation'
import Order from '../components/Order'
import Product from '../components/Product'
import Total from '../components/Total'

configure({ adapter: new Adapter() });

beforeAll(() => {
  store.dispatch(setCart([{
    quantity: 1,
    _id: "5e9e317d3d309c2d0792e840",
    product: {
      _id: "5e95e0e17ac12231e163d5eb",
      name: "Pants A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem.",
      price: 30,
      image: "uploads/c24eae84f21a5d75d705af29c469b625.jpeg",
      __v: 0,
      rating: 5
    },
    __v: 0,
    total: 30,
  }
]))
})
describe('Navigation.js', () => {
   const history = createMemoryHistory()
   const route = '/'
   history.push(route) 
   const wrapper = mount(<Router history={history}><Provider store={store}><Navigation/></Provider></Router>)
    it('renders cart number',() => {
      expect(wrapper.find('#cart').text()).toContain('1')
    })
})

describe('Order.js',() => {
  const order = {
    quantity: 1,
    _id: "5e9e317d3d309c2d0792e840",
    product: {
      _id: "5e95e0e17ac12231e163d5eb",
      name: "Pants A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem.",
      price: 30,
      image: "uploads/c24eae84f21a5d75d705af29c469b625.jpeg",
      __v: 0,
      rating: 5
    },
    __v: 0,
    total: 30,
  }
  const deleteProp = sinon.stub()
  const changeProp = sinon.stub()
  const wrapper = mount(<Provider store={store}><table><tbody><Order order={order} change={changeProp} delete={deleteProp}/></tbody></table></Provider>)
  it('renders order values',() => {
    expect(wrapper.find('img').prop('src')).toContain(order.product.image)
    expect(wrapper.find('#name').text()).toContain(order.product.name)
    expect(wrapper.find('#description').text()).toContain(order.product.description)
    expect(wrapper.find('#price').text()).toContain(order.product.price.toFixed(2))
    expect(wrapper.find('select').props().value).toBe(order.quantity)
  })
  it('deletes and changes', () => {
    wrapper.find('button').simulate('click')
    expect(deleteProp.called).toBeTruthy()
    wrapper.find('select').simulate('change', {target:{ value :2}});
    expect(changeProp.called).toBeTruthy()
  })
})

describe('Product js',() => {
  const product = {
    _id: "5e95e0e17ac12231e163d5eb",
    name: "Pants A",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem.",
    price: 30,
    image: "uploads/c24eae84f21a5d75d705af29c469b625.jpeg",
    __v: 0,
    rating: 5
  }
  const history = createMemoryHistory()
  const route = '/'
  history.push(route) 
  const addProp = sinon.stub()
  const wrapper = mount(<Router history={history}><Product product={product} add={addProp}/></Router>)
  const star = ' star '
  it('renders product values',() => {
    expect(wrapper.find('#price').text()).toContain(product.price.toFixed(2))
    expect(wrapper.find('#rating').text()).toContain(star.repeat(product.rating))
    expect(wrapper.find('img').prop('src')).toContain(product.image)
    expect(wrapper.find('a').props().href).toContain(`/product/${product._id}`)
  })
  it('adds',() => {
    wrapper.find('button').simulate('click')
    expect(addProp.called).toBeTruthy()
  })

  describe('Total js',() => {
    const total = 2
    const wrapper = mount(<Total total={total}/>)
    it('renders total values',() => {
      expect(wrapper.find('#total').text()).toContain(total)
    })
  })
})

