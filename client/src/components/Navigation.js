import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Navbar, Form, Badge, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
class Navigation extends Component{
  render(){
    return (
      <div>
      <Navbar bg="light" variant="light">
            <Link to='/'>
              <Navbar.Brand>Clothing Store</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Form inline>
              <Link to="/cart">
              <Button variant='light' block>
              <i className="material-icons">
              shopping_cart
              </i>
              <Badge variant='danger'pill>
                      {this.props.amount}
              </Badge> 
              </Button>
              </Link>
              </Form>
            </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  amount: state.cart.amount
})
export default connect(mapStateToProps)(Navigation)