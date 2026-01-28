import React from "react";
import type { Extension } from "../../types";
interface ExtensionItemProps {
    children: React.ReactNode;
    extension: Extension;
    onRemove: (extensionName: string) => void;
}

export const ExtensionItem: React.FC<ExtensionItemProps> = ({ extension, onRemove, children }) => {
  const status = extension.isActive ? 'active' : 'inactive';
    return (
        <article 
         key={extension.logo} 
         className="extension" 
         data-testid="extension"
         data-extension-name={extension.name} 
         data-status={status}>
          <div className="extension_logo">
            <div className="extension_logo-container">
              <img src={extension.logo} alt={extension.name} />
            </div>
            <div className="extension_info">
              <h2>{extension.name}</h2>
              <p>{extension.description}</p>
            </div>
          </div>
          <div className="extension_actions">
           <button 
            data-testid="remove-button"
            onClick={() => onRemove(extension.name)}>Remove</button>
            {children}
          </div>
        </article>
    );
}