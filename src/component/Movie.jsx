import React from 'react'
import {Col, Image} from 'react-bootstrap'

function Movie(){
    return(
        <Col className ="mb-2">
            <Image src="https://cdn.collider.com/wp-content/uploads/2012/12/how-i-met-your-mother.jpg" style={{width:"300px", height:"200px"}}/>
        </Col>
    );
}

    export default Movie