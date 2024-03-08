
import React, { useState } from 'react'
import colorBlock from './colorBlock'

function App() {
  let colors = [
   'violet', 'blue', 
  'lightblue', 'green',
   'greenyellow', 'yellow',
    'orange', 'red'
  ]

  let colorMap = colors.map((color, i) => {
    return (
      <colorBlock color={color} />
    )
  })

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  return (
    <div className="App">
         {colorMap}
         <colorForm addColor={addColor} />
    </div>
  )
  };

export default App;
