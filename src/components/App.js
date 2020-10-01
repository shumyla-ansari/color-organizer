import React, {useState} from 'react';
import colorData from './color-data.json'
import ColorList from './Color-List';
//import './App.css';

function App() {

  const [colors, setColors] = useState(colorData);

  function handleStarClick(id, rating){
    const newColors = colors.map(color => color.id === id ?
      {...color, rating} : color)
      setColors(newColors);
    }

  function onRemove(id){
    const newColors = colors.filter(color=>color.id !== id)
    setColors(newColors)

  }
  return (
    <div>
      <ColorList colors={colors}
      handleClick = {handleStarClick}
      onRemoveColor = {onRemove}
     />
    </div>
  );
}

export default App;
