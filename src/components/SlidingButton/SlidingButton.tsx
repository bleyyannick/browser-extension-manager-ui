
import './SlidingButton.css';

type SlidingButtonProps = {
  isActive: boolean;
  onToggle: () => void;
};

const SlidingButton = ({ isActive, onToggle }: SlidingButtonProps) => {
  return (
    <div className="slider-container" onClick={onToggle}>
      <div className={`slider-circle ${isActive ? 'left' : 'right'}`} />
    </div>
  );
};


export default SlidingButton;