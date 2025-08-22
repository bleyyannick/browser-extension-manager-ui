import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as mockExtensionData from '../../__mocks__/test-data';
import { ExtensionsList } from './ExtensionsList';

describe('ExtensionsList', () => {
  const mockOnToggle = vi.fn();
  const mockOnRemove = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Basic rendering', () => {
    it('should render without crashing', () => {
      const { container } = render(
        <ExtensionsList {...mockExtensionData.mockExtensionsListProps} />
      );
      expect(container.firstChild).toBeTruthy();
    });

    it('should render the correct number of extensions', () => {
      render(<ExtensionsList {...mockExtensionData.mockExtensionsListProps} />);
      
      const extensions = screen.getAllByTestId('extension-item');
      expect(extensions).toHaveLength(mockExtensionData.mockExtensions.length);
    });

    it('should display extension names', () => {
      render(<ExtensionsList {...mockExtensionData.mockExtensionsListProps} />);
      
      mockExtensionData.mockExtensions.forEach(extension => {
        expect(screen.getByText(extension.name)).toBeInTheDocument();
      });
    });

    it('should display extension descriptions', () => {
      render(<ExtensionsList {...mockExtensionData.mockExtensionsListProps} />);
      
      mockExtensionData.mockExtensions.forEach(extension => {
        expect(screen.getByText(extension.description)).toBeInTheDocument();
      });
    });
  });

  describe('Extension states', () => {
    it('should display active extensions correctly', () => {
      render(<ExtensionsList {...mockExtensionData.mockExtensionsListProps} />);
      
      const activeExtensions = mockExtensionData.mockExtensions.filter(ext => ext.isActive);
      
      activeExtensions.forEach(extension => {
        // Adapt according to your UI implementation
        const extensionElement = screen.getByText(extension.name).closest('[data-testid="extension-item"]');
        expect(extensionElement).toHaveClass('active'); 
      });
    });

    it('should display inactive extensions correctly', () => {
      render(<ExtensionsList {...mockExtensionData.mockExtensionsListProps} />);
      
      const inactiveExtensions = mockExtensionData.mockExtensions.filter(ext => !ext.isActive);
      
      inactiveExtensions.forEach(extension => {
        const extensionElement = screen.getByText(extension.name).closest('[data-testid="extension-item"]');
        expect(extensionElement).not.toHaveClass('active');
      });
    });
  });

  describe('User interactions', () => {
    it('should call onToggle when toggle button is clicked', () => {
      const props = {
        extensionList: mockExtensionData.mockExtensions,
        onToggle: mockOnToggle,
        onRemove: mockOnRemove
      };

      render(<ExtensionsList {...props} />);
      
      // Click on the first toggle button
      const toggleButtons = screen.getAllByTestId('toggle-button');
      fireEvent.click(toggleButtons[0]);
      
      expect(mockOnToggle).toHaveBeenCalledTimes(1);
      expect(mockOnToggle).toHaveBeenCalledWith(mockExtensionData.mockExtensions[0]);
    });

    it('should call onRemove when remove button is clicked', () => {
      const props = {
        extensionList: mockExtensionData.mockExtensions,
        onToggle: mockOnToggle,
        onRemove: mockOnRemove
      };

      render(<ExtensionsList {...props} />);
      
      // Click on the first remove button
      const removeButtons = screen.getAllByTestId('remove-button');
      fireEvent.click(removeButtons[0]);
      
      expect(mockOnRemove).toHaveBeenCalledTimes(1);
      expect(mockOnRemove).toHaveBeenCalledWith(mockExtensionData.mockExtensions[0]);
    });
  });

  describe('Edge cases and error handling', () => {
    it('should handle an empty extensions list', () => {
      const emptyProps = {
        extensionList: mockExtensionData.mockEmptyExtensionsList,
        onToggle: mockOnToggle,
        onRemove: mockOnRemove
      };

      render(<ExtensionsList {...emptyProps} />);
      
      const extensions = screen.queryAllByTestId('extension-item');
      expect(extensions).toHaveLength(0);
      
      // Check that a "no extensions" message is displayed
      expect(screen.getByText(/no extensions/i)).toBeInTheDocument();
    });

    it('should handle extensions with very long names', () => {
      const longNameProps = {
        extensionList: [mockExtensionData.mockExtensionWithLongName],
        onToggle: mockOnToggle,
        onRemove: mockOnRemove
      };

      render(<ExtensionsList {...longNameProps} />);
      
      expect(screen.getByText(mockExtensionData.mockExtensionWithLongName.name))
        .toBeInTheDocument();
    });

    it('should handle extensions with special characters', () => {
      const specialCharsProps = {
        extensionList: [mockExtensionData.mockExtensionWithSpecialChars],
        onToggle: mockOnToggle,
        onRemove: mockOnRemove
      };

      render(<ExtensionsList {...specialCharsProps} />);
      
      expect(screen.getByText(mockExtensionData.mockExtensionWithSpecialChars.name))
        .toBeInTheDocument();
      expect(screen.getByText(mockExtensionData.mockExtensionWithSpecialChars.description))
        .toBeInTheDocument();
    });

    it('should handle extensions without logo', () => {
      const missingLogoProps = {
        extensionList: [mockExtensionData.mockExtensionWithMissingLogo],
        onToggle: mockOnToggle,
        onRemove: mockOnRemove
      };

      render(<ExtensionsList {...missingLogoProps} />);
      
      // Check that a placeholder or default image is used
      const logoElement = screen.getByTestId('extension-logo');
      expect(logoElement).toHaveAttribute('src', expect.stringMatching(/default|placeholder/));
    });
  });

  describe('Performance with large list', () => {
    it('should handle a large list of extensions', () => {
      const largeListProps = {
        extensionList: mockExtensionData.mockLargeExtensionsList,
        onToggle: mockOnToggle,
        onRemove: mockOnRemove
      };

      render(<ExtensionsList {...largeListProps} />);
      
      const extensions = screen.getAllByTestId('extension-item');
      expect(extensions).toHaveLength(100);
    });
  });

  describe('Accessibility', () => {
    it('should have accessible buttons', () => {
      render(<ExtensionsList {...mockExtensionData.mockExtensionsListProps} />);
      
      const toggleButtons = screen.getAllByRole('button', { name: /enable|disable|activate|deactivate/i });
      const removeButtons = screen.getAllByRole('button', { name: /remove|delete/i });
      
      expect(toggleButtons).toHaveLength(mockExtensionData.mockExtensions.length);
      expect(removeButtons).toHaveLength(mockExtensionData.mockExtensions.length);
    });

    it('should have images with appropriate alt texts', () => {
      render(<ExtensionsList {...mockExtensionData.mockExtensionsListProps} />);
      
      mockExtensionData.mockExtensions.forEach(extension => {
        const logoElement = screen.getByAltText(`${extension.name} logo`);
        expect(logoElement).toBeInTheDocument();
      });
    });
  });
});

// ===== ADDITIONAL TESTS WITH MOCKS =====

describe('ExtensionsList - Specific mock tests', () => {
  it('should correctly use mockSingleExtension', () => {
    const singleExtensionProps = {
      extensionList: [mockExtensionData.mockSingleExtension],
      onToggle: vi.fn(),
      onRemove: vi.fn()
    };

    render(<ExtensionsList {...singleExtensionProps} />);
    
    expect(screen.getByText('Test Extension')).toBeInTheDocument();
    expect(screen.getByText('Extension for testing purposes')).toBeInTheDocument();
  });

  it('should test AdBlock Plus specifically', () => {
    render(<ExtensionsList {...mockExtensionData.mockExtensionsListProps} />);
    
    const adBlockElement = screen.getByText('AdBlock Plus');
    expect(adBlockElement).toBeInTheDocument();
    
    const adBlockContainer = adBlockElement.closest('[data-testid="extension-item"]');
    expect(adBlockContainer).toHaveClass('active'); // Because isActive: true in the mock
  });

  it('should test React Developer Tools specifically', () => {
    render(<ExtensionsList {...mockExtensionData.mockExtensionsListProps} />);
    
    const reactDevToolsElement = screen.getByText('React Developer Tools');
    expect(reactDevToolsElement).toBeInTheDocument();
    
    const reactDevToolsContainer = reactDevToolsElement.closest('[data-testid="extension-item"]');
    expect(reactDevToolsContainer).not.toHaveClass('active'); // Because isActive: false in the mock
  });
});



