import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ExtensionsList } from './ExtensionsList';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('ExtensionsList', () => {
  const mockExtensions = [
    {
      logo: './logo1.svg',
      name: 'Extension Active',
      description: 'Description 1',
      isActive: true
    },
    {
      logo: './logo2.svg',
      name: 'Extension Inactive',
      description: 'Description 2',
      isActive: false
    }
  ];

  let mockOnToggle: ReturnType<typeof vi.fn>;
  let mockOnRemove: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockOnToggle = vi.fn();
    mockOnRemove = vi.fn();
  });

  it('should render all extensions', () => {
    render(
      <ExtensionsList 
        extensionList={mockExtensions}
        onToggle={mockOnToggle}
        onRemove={mockOnRemove}
      />
    );

    expect(screen.getByText('Extension Active')).toBeInTheDocument();
    expect(screen.getByText('Extension Inactive')).toBeInTheDocument();
  });

  it('should display correct descriptions', () => {
    render(
      <ExtensionsList 
        extensionList={mockExtensions}
        onToggle={mockOnToggle}
        onRemove={mockOnRemove}
      />
    );

    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  it('should call onToggle when toggle button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <ExtensionsList 
        extensionList={mockExtensions}
        onToggle={mockOnToggle}
        onRemove={mockOnRemove}
      />
    );
    const toggleButtons = screen.getAllByTestId('sliding-button');

    await user.click(toggleButtons[0]);

    expect(mockOnToggle).toHaveBeenCalledTimes(1);
    expect(mockOnToggle).toHaveBeenCalledWith('Extension Active');
  });

  it('should call onRemove when remove button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <ExtensionsList 
        extensionList={mockExtensions}
        onToggle={mockOnToggle}
        onRemove={mockOnRemove}
      />
    );
    const removeButtons = screen.getAllByRole('button', { name: /remove/i });

    await user.click(removeButtons[0]);

    expect(mockOnRemove).toHaveBeenCalledTimes(1);
    expect(mockOnRemove).toHaveBeenCalledWith('Extension Active');
  });

  it('should render empty list when no extensions provided', () => {
    const { container } = render(
      <ExtensionsList 
        extensionList={mockExtensions.filter(() => false)}
        onToggle={mockOnToggle}
        onRemove={mockOnRemove}
      />
    );

    expect(container.firstChild).toBeNull();
  });

  it('should show active state for active extensions', () => {
    render(
      <ExtensionsList 
        extensionList={mockExtensions}
        onToggle={mockOnToggle}
        onRemove={mockOnRemove}
      />
    );
    const toggleButtons = screen.getAllByTestId('sliding-button');

    expect(toggleButtons[0]).toHaveClass('active');
    expect(toggleButtons[1]).not.toHaveClass('active');
  });
});
