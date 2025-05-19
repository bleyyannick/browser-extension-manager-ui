import './App.css'
import { Header } from './components/Header/Header'
import data from '../data.json'; 
import { ExtensionsList }from './components/ExtensionsList/ExtensionsList';
import { ExtensionFilter, type Extension, type ExtensionFilterType } from './types';
import { useState } from 'react';

function App() {
   const [extensions, setExtensions] = useState<Extension[]>(data);
   const [filter, setFilter] = useState<ExtensionFilterType>(ExtensionFilter.ALL);

  const filteredExtensionList = extensions.filter((ext) => {
    if (filter === ExtensionFilter.ALL) return true;
    if (filter === ExtensionFilter.ACTIVE) return ext.isActive;
    return !ext.isActive;
  });

  const toggleExtension = (name: string) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.name === name? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const handleFilterExtensions = (filterExtension: ExtensionFilterType) => {
    if (filter === filterExtension) return;
    setFilter(filterExtension);
  };

  
  return (
    <> 
     <Header />
     <main>
       <section id="extensions_intro">
         <h1>Extensions List</h1>
         <ul className="extensions_filter-list">
            <li>
               <button
                 onClick={() => handleFilterExtensions(ExtensionFilter.ALL)}
                >All</button>
            </li>
            <li>
               <button
                  onClick={() => handleFilterExtensions(ExtensionFilter.ACTIVE)}
               >Active</button>
            </li>
            <li>
               <button
                onClick={() => handleFilterExtensions(ExtensionFilter.INACTIVE)} 
               >Inactive</button>
            </li>
         </ul>
       </section>
       <section id="extensions_list">
          <ExtensionsList 
            onToggle={toggleExtension} 
            extensionList={filteredExtensionList} />
        </section>
     </main>
    </>
  )
}

export default App
