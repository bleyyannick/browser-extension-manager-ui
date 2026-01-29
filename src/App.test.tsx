import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App - Integration tests', () => {
  it('should display all extensions by default', () => {
    render(<App />);
    
    const allButton = screen.getByRole('button', { name: /^All$/i });
    expect(allButton).toHaveClass('active');
  });

  it('should filter and display only active extensions when Active button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const activeButton = screen.getByRole('button', { name: /^Active$/i });
    await user.click(activeButton);

    expect(activeButton).toHaveClass('active');

    expect(screen.getByText('DevLens')).toBeInTheDocument();
    expect(screen.getByText('StyleSpy')).toBeInTheDocument();
    expect(screen.getByText('JSONWizard')).toBeInTheDocument();

    expect(screen.queryByText('SpeedBoost')).not.toBeInTheDocument();
    expect(screen.queryByText('ViewportBuddy')).not.toBeInTheDocument();
    expect(screen.queryByText('GridGuides')).not.toBeInTheDocument();
  });

  it('should filter and display only inactive extensions when Inactive button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);


    const inactiveButton = screen.getByRole('button', { name: /^Inactive$/i });
    await user.click(inactiveButton);

  
    expect(inactiveButton).toHaveClass('active');


    expect(screen.getByText('SpeedBoost')).toBeInTheDocument();
    expect(screen.getByText('ViewportBuddy')).toBeInTheDocument();
    expect(screen.queryByText('GridGuides')).toBeInTheDocument();

    expect(screen.queryByText('DevLens')).not.toBeInTheDocument();
    expect(screen.queryByText('StyleSpy')).not.toBeInTheDocument();
  });

  it('should switch between filters correctly', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByText('DevLens')).toBeInTheDocument();
    expect(screen.getByText('SpeedBoost')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /^Active$/i }));
    expect(screen.getByText('DevLens')).toBeInTheDocument();
    expect(screen.queryByText('SpeedBoost')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /^Inactive$/i }));
    expect(screen.queryByText('DevLens')).not.toBeInTheDocument();
    expect(screen.getByText('SpeedBoost')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /^All$/i }));
    expect(screen.getByText('DevLens')).toBeInTheDocument();
    expect(screen.getByText('SpeedBoost')).toBeInTheDocument();
  });

  it('should not change filter when clicking on already active filter', async () => {
    const user = userEvent.setup();
    render(<App />);

    const allButton = screen.getByRole('button', { name: /^All$/i });
    
    expect(allButton).toHaveClass('active');
    const initialExtensionsCount = screen.getAllByRole('listitem').length;

    await user.click(allButton);

    expect(allButton).toHaveClass('active');
    expect(screen.getAllByRole('listitem')).toHaveLength(initialExtensionsCount);
  });

  it('should toggle extension status and maintain filter', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /^Active$/i }));


    const devLensItem = screen.getByText('DevLens').closest('article');
    expect(devLensItem).toBeInTheDocument();

 
    const toggleButton = devLensItem?.querySelector('[data-testid="sliding-button"]');
    if (toggleButton) {
      await user.click(toggleButton);
    }
    expect(screen.queryByText('DevLens')).not.toBeInTheDocument();
  });
});
