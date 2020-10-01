import React from 'react'
import {FaStar} from 'react-icons/fa'

function StarRating({rating = 0, handleClickStar = f => f}) {
   const createArray = length => [...Array(length)]
   const totalSelected = 5;

   const Star = ({ selected = false, onSelect = f =>f }) => (
       <FaStar onClick ={onSelect} color={selected ? "red" : "grey"}/>
   )
    return (
        <div>
            {createArray(totalSelected).map((n, i) => (
                <Star key ={i}
                selected = {rating > i}
                onSelect ={() => handleClickStar(i+1)}
                />
                
             ) )}
<p>{rating} of {totalSelected} ratings</p>


            
        </div>
    )
}

export default StarRating
