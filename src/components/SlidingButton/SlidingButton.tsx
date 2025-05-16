import { useState } from 'react';
import './SlidingButton.css';

const SlidingButton = () => {
  const [isLeft, setIsLeft] = useState(false);

  const togglePosition = () => {
    setIsLeft(!isLeft);
  };

  return (
    <div className="slider-container" onClick={togglePosition}>
      <div className={`slider-circle ${isLeft ? 'left' : 'right'}`} />
    </div>
  );
};

export default SlidingButton;