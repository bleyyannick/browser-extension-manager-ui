export type Extension = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

export type ExtensionsListProps = {
  extensionList: Extension[];
};

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
export type ExtensionFilterType = typeof ExtensionFilter[keyof typeof ExtensionFilter]