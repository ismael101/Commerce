import React, {Component} from 'react'
import Total from '../components/Total'
import {connect} from 'react-redux'
import Order from '../components/Order'
import { Container, Row, Col, Table} from 'react-bootstrap'
import store from '../store'
import {remove, update} from '../actions/cartActions'
import axios from 'axios'

class Cart extends Component{
    async handleDelete(order){
        try{
            await axios.delete(`/api/orders/${order._id}`)
            store.dispatch(remove(order))    
        }catch(err){
            console.log(err)
        }
    }
    async handleChange(change){
        try{
            let res = await axios.patch(`/api/orders/${change.order._id}`,{quantity:change.quantity})
            store.dispatch(update(res.data))
        }catch(err){
            console.log(err)
        }   
    }
   render(){
       const listOrders = this.props.cart.map(item => {
            return(<Order key={item._id} order={item}  change={this.handleChange} delete={this.handleDelete}/>)
       })
       return(
           <div>
               <Container fluid className='py-5 px-5'>
                   <Row>
                       <Col xs={12} sm={12} md={8} align='center'>
                       <Table responsive>
                            <thead>
                                <tr>
                                <th className='text-left'>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Remove</th>
                                </tr> 
                            </thead>
                            <tbody>
                            {listOrders}
                            </tbody>
                        </Table>
                       </Col>
                       <Col xs={12} sm={12} md={4} align='center'>
                            <Total total={this.props.total.toFixed(2)}/>
                        </Col>
                    </Row>
                </Container>
            </div>
       )
   } 
}

const mapStateToProps = (state) => ({
    cart: state.cart.cart,
    total: state.cart.total,
    amount: state.cart.amount
})
export default connect(mapStateToProps)(Cart)