import React from 'react'
import { Form } from 'react-bootstrap'

const CustomInput = ({label, ...rest}) => {
  return (
    <Form.Group className='mb-3 w-30px'>
        {label&& <Form.Label>{label}</Form.Label>}
        <Form.Control {...rest}/>
    </Form.Group>
  )
}

export default CustomInput
