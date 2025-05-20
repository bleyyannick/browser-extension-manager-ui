
import './SlidingButton.css';
import type { SlidingButtonProps } from '../../types';

const SlidingButton = ({ isActive, onClick }: SlidingButtonProps) => {
  return (
    <div className="slider-container" onClick={onClick}>
      <div className={`slider-circle ${isActive ? 'left' : 'right'}`} />
    </div>
  );
};


export default SlidingButton;