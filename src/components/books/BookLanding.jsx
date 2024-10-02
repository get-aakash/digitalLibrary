import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import DefaultLayout from '../layout/DefaultLayout'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const BookLanding = () => {

    const { books } = useSelector(state => state.books)
    const { selectedBook } = useSelector(state => state.books)
    const {user} = useSelector(state=>state.user)
    const navigate= useNavigate()

    useEffect(() => {
        !selectedBook.id && navigate("/")
    
    
      }, [selectedBook, navigate])
    return (
        <DefaultLayout>
            <Container className='mb-5'>
                <div className="mt-5">
                    <Row>
                        <Col sm="5">
                            <img src={selectedBook.imageUrl} alt="" width="100%" className='border rounded p-1' />
                        </Col>
                        <Col sm="7">
                            <div className="fw-bold fs-1">
                                {selectedBook.bookName}
                            </div>

                            <p>{selectedBook.authorName}-{selectedBook.publishedYear}</p>

                            <p>{selectedBook.summary}</p>
                            {user.uid ?(<Button variant='primary'>Borrow</Button>):(<Link to='/signupsignin'>Log In to Borrow</Link>)}
                            

                        </Col>
                    </Row>
                </div>

            </Container>

        </DefaultLayout>
    )
}

export default BookLanding
