import React from 'react'
import {Card} from 'react-bootstrap'

export default function Total(props){
    return(
        <Card>
            <Card.Header>
                <p>Total</p>
            </Card.Header>
            <Card.Body className='py-2 px-2'>
                <span className='text-center align-center display-2'>${props.total}</span>
            </Card.Body>
        </Card>
    )
}