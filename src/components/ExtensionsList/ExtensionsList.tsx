import SlidingButton from '../SlidingButton/SlidingButton';
import './extensions.css'
import type { Extension, ExtensionsListProps } from '../../types';

export const ExtensionsList = ({ extensionList }: ExtensionsListProps) => {
  return extensionList.map((extension: Extension) => {
    return ( 
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
          <SlidingButton />
          {/* 
          <div className={`extension_slider-container`}>
               <div className="extenstion_slider-button"/>
          </div>
          */}
        </div>
      </article>
    )
  }); 
}; 