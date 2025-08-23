import { useState } from "react";
import data from '../../data.json';

import { type Extension } from "../types";

export const useExtensions = () => {
   const [extensions, setExtensions] = useState<Extension[]>(data as Extension[]);

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
   

    return {
        extensions,
        handleRemoveExtension,
        toggleExtension
    }
}

