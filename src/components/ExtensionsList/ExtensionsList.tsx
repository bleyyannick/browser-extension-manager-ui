import SlidingButton from '../SlidingButton/SlidingButton';
import './extensions.css';
import type { ExtensionsListProps } from '../../types';

export const ExtensionsList = ({
  extensionList,
  onToggle,
}: ExtensionsListProps & { onToggle: (name : string) => void }) => {
  return (
    <>
      {extensionList.map((extension) => (
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
            <button>Remove</button>
            <SlidingButton
              isActive={extension.isActive}
              onToggle={() => onToggle(extension.name)}
            />
          </div>
        </article>
      ))}
    </>
  );
};