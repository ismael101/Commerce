import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Product(props){
      const rating = () => {
        let full = []
        let empty = []
        for(let x = 0; x<props.product.rating; x++){
          full.push(<i className="material-icons" key={x}> star </i>)
        }
        for(let y = 0; y<(5-props.product.rating); y++){
          empty.push(<i className="material-icons" key={y + 5}> star_border </i>)
        }
        return[full,empty]
      }
      return(
        <Card className='my-5 mx-5 h-100'>
          <Card.Header>
            <Card.Title><Link to={`/product/${props.product._id}`}><p className='text-left'>{props.product.name}</p></Link></Card.Title>
          </Card.Header>
          <Card.Img variant="top" src={`/${props.product.image}`} fluid="true"/>
          <Card.Body>
            <p className='text-left'>${props.product.price.toFixed(2)}</p>
            <div className='text-left'>{rating()}</div>        
          </Card.Body>
          <Card.Footer className='text-left' variant='light'>
              <Button variant='primary' onClick={() => {props.add(props.product)}} block>Add</Button>
          </Card.Footer>
        </Card>
      )
      
}