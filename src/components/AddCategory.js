import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ( { setCategories }) => {

    const [ InputValue, setInputValue ] = useState('')

    const handleInputChange = (e) => {
        const { value } = e.target
        setInputValue(value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(InputValue.trim().length > 0 ){
            setCategories(cat => [ InputValue, ...cat ])
            setInputValue('')
        }
    }

    return ( 
        <form onSubmit={ handleSubmit }>
            <input type='text' onChange={ handleInputChange } value={ InputValue } /> 
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory