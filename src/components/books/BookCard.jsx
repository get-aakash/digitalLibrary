import React from 'react'
import CustomCard from './CustomCard'

const BookCard = ({display}) => {
  return (
    <div>
        {
            display.map((item,i)=>(
                <CustomCard key={i} books={item} />
            ))
        }
      
    </div>
  )
}

export default BookCard
