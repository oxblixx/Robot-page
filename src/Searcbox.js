import React from 'react'
import './Searchbox.css'

const Searchbox = ({ searchField, searchChange }) => {
  return (
    <div className="p3">
      <input
        className="outline p3 b--light-green bg-light-green"
        type="search"
        placeholder="Search For Robots"
        onChange={searchChange}
      />
    </div>
  )
}

export default Searchbox
