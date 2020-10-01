import React from 'react'
import StarRating from './Star-rating'
import {FaTrash} from 'react-icons/fa'

export default function Color({id, title, color, rating, starChange, onRemove}) {
    return (
        <section>
            <h1>{title}</h1>
            <FaTrash onClick={()=> {onRemove(id)}} />
            <div style = {{backgroundColor: color, height: 50}}/>
            <StarRating rating={rating}
            handleClickStar ={(rating)=> {starChange(id, rating)}}
             />
        </section>
    )
}
