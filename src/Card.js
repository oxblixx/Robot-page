import React from 'react'
import './Card.css'
import './robots'

const Card = ({ id, name, email }) => {
  return (
    <div className="flex-wrap tc bg-light-green dib pa3 br3 ma2 grow bw2 shadow-5 mt4">
      <img src={`https://www.robohash.org/${id}?200x200`} alt="robot" />
      <div>
        <h1 className="name">{name}</h1>
        <p className="f3">{email}</p>
      </div>
    </div>
  )
}

export default Card
