import React, {useState} from 'react'
import {Image, Form, Media, Button} from 'react-bootstrap'

export default function Order(props){
    const [quantity, setQuantity] = useState(props.order.quantity);
    return(
        <tr>
        <td>
            <Media>
            <Image
                width={128}
                className="mr-3"
                src={`http://localhost:4000/${props.order.product.image}`}
                alt="Generic placeholder"
            />
            <Media.Body className='text-left'>
                <h5>{props.order.product.name}</h5>
                <p>{props.order.product.description}</p>
            </Media.Body>
            </Media>
        </td>
        <td>
            <span className='align-center'>${props.order.product.price.toFixed(2)}</span>
        </td>
        <td>
        <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Control as="select" value={quantity} onChange={(e) => {props.change({quantity:e.target.value, order:props.order}); setQuantity(e.target.value)}}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </Form.Control>
        </Form.Group>
        </td>
        <td>
        <Button variant='outline-danger' onClick={() => {props.delete(props.order)}}>
        <i className="material-icons">
        delete_outline
        </i>
        </Button>
        </td>
    </tr>
    )
}
