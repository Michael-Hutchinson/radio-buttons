import React, { useState } from 'react';

const App = () => {
  const [selectedRadio, setSelected] = useState('radio2');
  const isSelected = (value: string): boolean => selectedRadio === value;

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelected(e.currentTarget.value);

  return (
    <div className="App">
      <input
        type="radio"
        name="radio-btn"
        value="radio1"
        checked={isSelected('radio1')}
        onChange={handleRadioClick}
      />
      <input
        type="radio"
        name="radio-btn"
        value="radio2"
        checked={isSelected('radio2')}
        onChange={handleRadioClick}
      />
      <input
        type="radio"
        name="radio-btn"
        value="radio3"
        checked={isSelected('radio3')}
        onChange={handleRadioClick}
      />
      <input
        type="radio"
        name="radio-btn"
        value="radio4"
        checked={isSelected('radio4')}
        onChange={handleRadioClick}
      />
      <input
        type="radio"
        name="radio-btn"
        value="radio5"
        checked={isSelected('radio5')}
        onChange={handleRadioClick}
      />
    </div>
  );
};

export default App;
