export type Extension = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

export interface ExtensionsListProps {
  extensionList: Extension[];
  onToggle: (name: string) => void;
  onRemove: (extensionName: string) => void;
}

export type ExtensionStatus = {
    isActive: boolean;
}

export type ExtensionProps = {
  extension: Extension;
};

export const ExtensionFilter = {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    ALL: 'all',
} as const;


 export type SlidingButtonProps = {
  isActive: boolean;
  onClick: () => void;
};

export type ExtensionFilterType = typeof ExtensionFilter[keyof typeof ExtensionFilter]