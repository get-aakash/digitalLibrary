import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CustomCard = ({books}) => {
  return (
    <div className='border shadow-lg p-2 mb-3'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ width: '16rem', height:"18rem",margin:"14px" }} src={books.imageUrl} />
      <Card.Body>
        <Card.Title>{books.bookName}</Card.Title>
        <Card.Text className='card-text'>
          {books.summary}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default CustomCard
