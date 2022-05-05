import React from 'react'
//import ApiCall from '../ApiCall'

const SearchButton = ({prop1 , apiCall}) => {
    return (
        <div>
        <button onClick={apiCall} type='submit'>{prop1}</button>    
        </div>
    )
}

export default SearchButton