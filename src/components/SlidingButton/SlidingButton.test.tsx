
import { render } from '@testing-library/react';
import SlidingButton from './SlidingButton';
import { describe, it, expect } from 'vitest';

describe('SlidingButton', () => {
  it('should render without crashing', () => {
    const { container } = render(<SlidingButton isActive={false} onClick={() => {
    } } />);
    expect(container.firstChild).toBeTruthy();
  });

  it('should not apply active class when isActive is false', () => {
    const { container } = render(<SlidingButton isActive={false} onClick={() => {}} />);
    const sliderContainer = container.querySelector('.slider-container');
    expect(sliderContainer).not.toHaveClass('active');
  });

});