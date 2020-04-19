import React from 'react'
import { Container } from 'react-bootstrap'

const NotFound = () => {
    return(
        <div>
            <Container fluid className='text-left py-5 px-5'>
                <h1 className='display-1'>404</h1>
                <hr/>
                <h1>Page Not Found</h1>
            </Container>
        </div>
    )
}

export default NotFound