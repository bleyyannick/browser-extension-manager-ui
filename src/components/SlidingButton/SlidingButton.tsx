import './slidingButton.css';
import type { SlidingButtonProps } from '../../types';

const SlidingButton = ({ isActive, onClick }: SlidingButtonProps) => {
    return (
    <div
      role="button"
      data-testid="sliding-button"
      className={`slider-container ${isActive ? 'active' : ''}`}
      onClick={onClick}
      tabIndex={0} 
      onKeyDown={(e) => {  
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
    >
      <div className="slider-circle" />
    </div>
  );
};


export default SlidingButton;