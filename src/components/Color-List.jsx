import React from 'react'
import Color from './Color'


function ColorList({colors =[], onRemoveColor = f => f, handleClick = f => f}) {
    if(!colors.length) return <div>No colors Listed</div>;
    return (
        <div>
           {colors.map((value) => {
           return (
           <Color key ={value.id}
           id={value.id} 
           title = {value.title}
           color = {value.color} 
           rating = {value.rating}
           onRemove= {onRemoveColor}
           starChange ={handleClick}/>)}
           )}
        </div>
    )
}

export default ColorList
