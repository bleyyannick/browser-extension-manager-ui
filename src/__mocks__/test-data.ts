import { vi } from 'vitest';

// Mock de données pour les tests d'extensions de navigateur
// Chemin: browser-extension-manager-ui/src/__mocks__/test-data.ts

export const mockExtensions = [
  {
    name: 'AdBlock Plus',
    description: 'Block ads and trackers across the web',
    logo: 'https://example.com/adblock-logo.png',
    isActive: true
  },
  {
    name: 'React Developer Tools',
    description: 'Debug React components and hooks',
    logo: 'https://example.com/react-devtools-logo.png',
    isActive: false
  },
  {
    name: 'LastPass',
    description: 'Password manager and secure vault',
    logo: 'https://example.com/lastpass-logo.png',
    isActive: true
  }
];

export const mockSingleExtension = {
  name: 'Test Extension',
  description: 'Extension for testing purposes',
  logo: 'https://example.com/test-logo.png',
  isActive: false
};

// Extensions avec cas d'erreur
export const mockExtensionWithLongName = {
  name: 'This is a very very very long extension name that might break the layout',
  description: 'Extension with extremely long name to test UI boundaries',
  logo: 'https://example.com/long-name-logo.png',
  isActive: true
};

export const mockExtensionWithMissingLogo = {
  name: 'No Logo Extension',
  description: 'Extension without logo to test error handling',
  logo: '', 
  isActive: false
};

export const mockExtensionWithSpecialChars = {
  name: 'Tëst Extënsîön with émojis 🚀',
  description: 'Extension with special characters & émojis to test encoding 中文',
  logo: 'https://example.com/special-chars-logo.png',
  isActive: true
};

// Liste vide pour tester le cas "no extensions"
export const mockEmptyExtensionsList = [];

// Grande liste pour tester les performances
export const mockLargeExtensionsList = Array.from({ length: 100 }, (_, index) => ({
  name: `Extension ${index}`,
  description: `Description for extension number ${index}`,
  logo: `https://example.com/logo-${index}.png`,
  isActive: index % 2 === 0 
}));

// Extensions avec erreurs de réseau (pour tests E2E)
export const mockExtensionsWithNetworkErrors = [
  {
    name: 'Extension with 404 logo',
    description: 'Logo will return 404',
    logo: 'https://httpstat.us/404',
    isActive: true
  },
  {
    name: 'Extension with slow logo',
    description: 'Logo will load slowly',
    logo: 'https://httpstat.us/200?sleep=5000',
    isActive: false
  }
];


export const mockExtensionsListProps = {
  extensionList: mockExtensions,
  onToggle: vi.fn(),
  onRemove: vi.fn()  
};

export const mockExtensionsListPropsVitest = {
  extensionList: mockExtensions,
  onToggle: () => {},
  onRemove: () => {}
};