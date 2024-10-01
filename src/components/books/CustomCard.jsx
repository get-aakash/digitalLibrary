import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setSelectedBook } from '../../store/bookSlice'
import { useNavigate } from 'react-router-dom'

const CustomCard = ({ books }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleOnClick= ()=>{
    dispatch(setSelectedBook(books.id))
    navigate("/book/"+books.bookName)

  }
  return (
    <div className='border shadow-lg p-1 py-4 mb-3'>
      <Card onClick={handleOnClick} style={{ width: '18rem' }} className='justify-content-center'>
        <Card.Img variant="top" style={{ width: "100%", height: "18rem" }} src={books.imageUrl} />
        <Card.Body>
          <Card.Title>{books.bookName}</Card.Title>
          <Card.Text className='card-text'>
            {books.summary}
          </Card.Text>

        </Card.Body>
      </Card>

    </div>
  )
}

export default CustomCard
