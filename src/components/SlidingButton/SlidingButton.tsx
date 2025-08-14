import './slidingButton.css';
import type { SlidingButtonProps } from '../../types';

const SlidingButton = ({ isActive, onClick }: SlidingButtonProps) => {
    return (
    <div
      className={`slider-container ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="slider-circle" />
    </div>
  );
};


export default SlidingButton;