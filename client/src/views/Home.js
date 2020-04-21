import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container,Jumbotron, Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
import store from '../store'
import {add} from '../actions/cartActions'
class Home extends Component{
    async handleAdd(product){
        try{
            let res = await axios.post('/api/orders',{quantity:1,product:product._id})
            store.dispatch(add(res.data))
        }catch(err){
            console.log(err)
        }
    }
    render(){
        let listProducts = this.props.items.map(item => {
            return(
                <Col key={item._id} className='my-5' xs={12} sm={6} md={4} align='center'>
                    <Product product={item} add={this.handleAdd}/>
                </Col>
            )
        })
        return(
            <div>
            <Jumbotron>
            <h1>Hello, Customer</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem
            </p>
            </Jumbotron>
            <Container>
                <Row>
                    {listProducts}
                </Row>
            </Container>
            </div>
         )
   } 
}

const mapStateToProps = (state) => ({
    items: state.items.items
})
export default connect(mapStateToProps)(Home)