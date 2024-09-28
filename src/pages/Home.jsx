import React from 'react'
import DefaultLayout from '../components/layout/DefaultLayout'
import './home.css'
import { Button } from 'react-bootstrap'

const Home = () => {
  return (
    <DefaultLayout>
      <div className="wrapper">
        <h1 className='text-center mt-2 text-primary bg-light'>Welcome to Digital Library</h1>
        <div className="addBtn">

          <a href='/addBook'><Button na className='px-4 py-2 hover:bg-blue-100' variant="outline-primary">+ADD BOOKS</Button></a>
          <div className="input-field">
            <input className='input-box' type="text" placeholder='Search Here..' />
            <button className='search-btn'>Search</button>

          </div>

        </div>


      </div>
    </DefaultLayout>
  )
}

export default Home
