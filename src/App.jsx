import { useState } from 'react';
import './App.css';
import './index.css';
import { appColors } from './colors/colors';

const App = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const changeColor = (direction) => {
    let newIndex = colorIndex + direction;
    if (newIndex < 0) {
      newIndex = appColors.length - 1; 
    } else if (newIndex >= appColors.length) {
      newIndex = 0; 
    }
    setColorIndex(newIndex); 
  };
  const currentColor = appColors[colorIndex].code;
  document.body.style.backgroundColor = currentColor;

  return (
    <>
      <h1>Hello!</h1>
      <button onClick={() => changeColor(1)}>+</button>
      <input type="text" value={currentColor} className='input-color' readOnly />
      <button onClick={() => changeColor(-1)}>-</button>
    </>
  );
};

export default App;
