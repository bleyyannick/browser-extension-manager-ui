import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SlidingButton from './SlidingButton';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('SlidingButton', () => {
  let mockHandleClick: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockHandleClick = vi.fn();
  });
   
  it('should render without crashing', () => {
    const { container } = render(<SlidingButton isActive={false} onClick={mockHandleClick} />);
    expect(container.firstChild).toBeTruthy();
  });

  it('should not apply active class when isActive is false', () => {
    render(<SlidingButton isActive={false} onClick={mockHandleClick} />);
    const sliderButton = screen.getByTestId('sliding-button');
    expect(sliderButton).not.toHaveClass('active');
  });

  it('should apply active class when isActive is true', () => {
    render(<SlidingButton isActive={true} onClick={mockHandleClick} />);
    const sliderButton = screen.getByTestId('sliding-button');
    expect(sliderButton).toHaveClass('active');
  });

  it('should call onClick when the button is clicked', async () => {
    const user = userEvent.setup();
    render(<SlidingButton isActive={false} onClick={mockHandleClick} />);
    const sliderButton = screen.getByTestId('sliding-button');

    await user.click(sliderButton);
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  it('should handle multiple clicks', async () => {
    const user = userEvent.setup();
    render(<SlidingButton isActive={false} onClick={mockHandleClick} />);
    
    const sliderButton = screen.getByTestId('sliding-button');
    await user.click(sliderButton);
    await user.click(sliderButton);
    
    expect(mockHandleClick).toHaveBeenCalledTimes(2);
  });

  it('should be accessible via keyboard', async () => {
    const user = userEvent.setup();
    render(<SlidingButton isActive={false} onClick={mockHandleClick} />);
    
    const sliderButton = screen.getByTestId('sliding-button');
    sliderButton.focus();
    await user.keyboard('{Enter}');
    
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});