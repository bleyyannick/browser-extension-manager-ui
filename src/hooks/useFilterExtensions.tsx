import { useState } from "react";
import { ExtensionFilter, type Extension, type ExtensionFilterType } from "../types";


export const useFilterExtensions = (extensions: Extension[]) => {
   const [filter, setFilter] = useState<ExtensionFilterType>(ExtensionFilter.ALL);

   const filteredExtensionList = extensions.filter((ext) => {
        if (filter === ExtensionFilter.ALL) return true;
        if (filter === ExtensionFilter.ACTIVE) return ext.isActive;
        return !ext.isActive;
    });

  const handleFilterExtensions = (filterExtension: ExtensionFilterType) => {
    if (filter === filterExtension) return;
    setFilter(filterExtension);
  };

  return { filteredExtensionList, handleFilterExtensions, filter };
}