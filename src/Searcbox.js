import React from 'react'
import './Searchbox.css'

const Searchbox = ({ searchField, searchChange }) => {
  return (
    <div className="p4">
      <input
        className="outline p5 b--light-green bg-light-green"
        type="search"
        placeholder="Search For Robots"
        onChange={searchChange}
      />
    </div>
  )
}

export default Searchbox
