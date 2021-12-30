import React from 'react'
import data from '../data'

export default function Card({title, price, description}) {

//   console.log(props);

    return (
        <div className='card'>
            {title}
            {price}
            {description}
        </div>
    )
}
