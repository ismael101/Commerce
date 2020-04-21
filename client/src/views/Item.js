import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Container, Col, Image, Button, Form} from 'react-bootstrap'
import axios from 'axios'
import store from '../store'
import {add} from '../actions/cartActions'
class Item extends Component{
  constructor(props){
    super(props);
    this.state = {quantity: 1};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  async handleSubmit(e){
    e.preventDefault();
    try{
        let res = await axios.post('/api/orders',{quantity:this.state.quantity,product:this.props.items.filter(item => item._id === this.props.match.params.id)[0]._id})
        store.dispatch(add(res.data))
    }catch(err){
        console.log(err)
    }
  }
  handleChange(e){
    this.setState({quantity:e.target.value})
  }
   render(){
        let item = this.props.items.filter(item => item._id === this.props.match.params.id)
        const rating = () => {
            let full = []
            let empty = []
            for(let x = 0; x<item[0].rating; x++){
              full.push(<i className="material-icons" key={x}> star </i>)
            }
            for(let y = 0; y<(5-item[0].rating); y++){
              empty.push(<i className="material-icons" key={y + 5}> star_border </i>)
            }
            return[full,empty]
          }
      
        let show = item.length > 0 ? (
                <Row className='mt-5'>
                   <Col xs={12} sm={12} md={8}>
                        <Image variant="top" src={`/${item[0].image}`} fluid className='mt-2'/>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                        <div className='my-2'>
                        <h1 className='text-right'>{item[0].name}</h1>
                        <p className='text-right'>{item[0].description}</p>
                        <p className='text-right'>{rating()}</p>
                        </div>
                        <Form className='float-md-right' onSubmit={this.handleSubmit}>
                          <Form.Control as="select" onChange={this.handleChange}>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          </Form.Control>
                          <Button variant='primary' type='submit' block>Add</Button>
                        </Form>
                    </Col>
                </Row>
      ):(
            <h1>Product Not Found</h1>
      )
       return(
           <Container fluid className="mh-100">
               {show}
            </Container>
       )
   } 
}

const mapStateToProps = (state) => ({
    items: state.items.items
})
export default connect(mapStateToProps)(Item)