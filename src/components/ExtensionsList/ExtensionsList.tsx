import './extensions.css'

type Extension = {
  logo: string;
  name: string;
  description: string;
};

type ExtensionsListProps = {
  extensionList: Extension[];
};

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
            <div className={`extensions_slider-container`}>
               <div className="extenstions_slider-button"/>
            </div>
        </div>
      </article>
    )
  }); 
}; 