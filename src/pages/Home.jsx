import React, { useEffect, useState } from 'react'
import DefaultLayout from '../components/layout/DefaultLayout'
import './home.css'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getBookAction } from '../components/books/bookAction'
import BookCard from '../components/books/BookCard'
const Home = () => {
  const [display, setDisplay] = useState([])
  const { books } = useSelector(state => state.books)
  const { user } = useSelector(state => state.user)
  console.log(user)
  const dispatch = useDispatch()
  useEffect(() => {
    !display.length && dispatch(getBookAction())
    setDisplay(books)

  }, [dispatch, books])


  return (
    <DefaultLayout>
      <div className="wrapper">
        <h1 className='text-center mt-2 text-primary bg-light'>Welcome to Digital Library</h1>
        <div className="addBtn">
          {user?.uid && <a href='/addBook'><Button na className='px-4 py-2 hover:bg-blue-100' variant="outline-primary">+ADD BOOKS</Button></a>}

          <div className="input-field">
            <input className='input-box' type="text" placeholder='Search Here..' />
            <button className='search-btn'>Search</button>



          </div>


        </div>
        <div className="bookCard">
          <BookCard display={display} />
        </div>


      </div>
    </DefaultLayout>
  )
}

export default Home
