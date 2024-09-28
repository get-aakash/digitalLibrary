import React, { useState } from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import CustomInput from '../CustomInput/CustomInput'
import { useDispatch } from 'react-redux'
import { addBook } from '../../store/bookSlice'
import { useNavigate } from 'react-router-dom'
import { addBookAction } from './bookAction'

const BookForm = () => {

  const [formData, setFormData] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inputs = [
    {
    label: "Book Name",
    placeholder: "Enter your Book Name Here...",
    type: "text",
    name:"bookName"
  },
  {
    label: "Author",
    placeholder: "Enter your Author Name Here...",
    type: "text",
    name: "authorName"
  },
  {
    label: "Image",
    placeholder: "Enter your Image url Here...",
    type: "text",
    name: "imageUrl"
  },
  {
    label: "Published Year",
    type: "number",
    name: "publishedYear",
    placeholder: "Book Published Year"
  },
  {
    label: "Summary",
    type: "text",
    as: 'textarea',
    placeholder: "Book Summary",
    rows: '5',
    name: "summary"
  }
  

  ]
  const handleOnChange = (e)=>{
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
  }
  const handleOnSubmit = (e)=>{
    e.preventDefault()
    console.log(formData)
    dispatch(addBookAction(formData))
  }
  return (
    <DefaultLayout>
      <Container className='mt-4'>
        <Form onSubmit={handleOnSubmit} className='border p-3 m-auto py-5 mb-3 rounded shadow-lg' style={{width:"450px"}}>
          <h3 className='text-primary text-center'>Add your Books Here...</h3>
          <div className="mt-5">
           {
            inputs.map((data,index)=>(
              <CustomInput key={index} {...data} onChange={handleOnChange}  />
            ))
           }
           <div className="formBtn d-grid mt-4">
           <Button type='submit'>Submit</Button>

           </div>
           

          </div>

        </Form>


      </Container>



    </DefaultLayout>
  )
}

export default BookForm

