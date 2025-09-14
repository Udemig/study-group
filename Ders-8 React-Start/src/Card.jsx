import React from 'react'

const Card = ({title, desc}) => {

    console.log(title)
  return (
    <div className='card w-50'>
        <div className='card-top'>
            <img className='w-100' src="https://picsum.photos/201" alt="" />
        </div>
        <div className='card-bottom d-flex flex-column gap-3 align-items-center justify-content-center p-3'>
            <h1>{title}</h1>
            <p>{desc}</p>
            <button className='btn btn-success'>Ekle</button>
        </div>
        
    </div>
  )
}

export default Card
