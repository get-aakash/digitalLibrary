import React from 'react'
import CustomCard from './CustomCard'
import { Col, Row } from 'react-bootstrap'

const BookCard = ({display}) => {
  console.log(display)
  return (
    <div>
      
     <h2 className='mb-4 text-center text-primary'>Browse through the wide range of our books!! </h2>
     <hr />
      <Row>
        <Col className='d-flex flex-wrap justify-content-between '>
        {display.map((item,i)=>(
      <CustomCard key={i} books= {item} />
    ))}
        </Col>
      </Row>
    
    
    
    </div>
    
    

 
  )
}

export default BookCard
