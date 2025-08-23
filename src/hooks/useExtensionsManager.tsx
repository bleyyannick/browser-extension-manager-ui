import { useState } from "react";

import { ExtensionFilter, type Extension, type ExtensionFilterType  } from "../types";

export const useExtensionsManager = ( 
   intialExtensions : Extension[], 
   filter: ExtensionFilterType ) => {

   const [extensions, setExtensions] = useState<Extension[]>(intialExtensions);

   const handleRemoveExtension = (extensionName: string) => {
     setExtensions((prev) => [...prev].filter((ext) => ext.name !== extensionName));
   };

   const toggleExtension = (name: string) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.name === name? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const filteredExtensionList = extensions.filter((ext) => {
          if (filter === ExtensionFilter.ALL) return true;
          if (filter === ExtensionFilter.ACTIVE) return ext.isActive;
          return !ext.isActive;
      });
  
  return {
        handleRemoveExtension,
        toggleExtension,
        filteredExtensionList,
    }
}

