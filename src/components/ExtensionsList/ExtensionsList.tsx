import SlidingButton from '../SlidingButton/SlidingButton';
import './extensions.css';
import type { Extension, ExtensionsListProps } from '../../types';

export const ExtensionsList = ({
  extensionList,
  onToggle,
  onRemove,
}: ExtensionsListProps & { 
    onToggle: (name : string) => void, 
    onRemove: (extensionName: string) => void }) => {

  return (
    <>
      {extensionList.map((extension :Extension) => (
        <article key={extension.logo} className="extension">
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
           <button onClick={() => onRemove(extension.name)}>Remove</button>
            <SlidingButton
              isActive={extension.isActive}
              onClick={() => onToggle(extension.name)}
            />
          </div>
        </article>
      ))}
    </>
  );
};