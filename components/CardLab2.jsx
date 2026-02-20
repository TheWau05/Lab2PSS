import React from 'react'

export const CardLab2 =({name, sprites}) => {
  return (
    <>
    <div className="card" style={{ width: '18rem' }}>
    <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <img src={sprites} className="card-img-top" alt={name} />   
    </div>
    </div>
    </>
  )
}

