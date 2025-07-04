import './App.css'
import { Header } from './components/Header/Header'
import data from '../data.json';
import { ExtensionsList } from './components/ExtensionsList/ExtensionsList';
import { ExtensionFilter, type Extension, type ExtensionFilterType } from './types';
import {  useState } from 'react';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
   const [extensions, setExtensions] = useState<Extension[]>(data as Extension[]);
   const [filter, setFilter] = useState<ExtensionFilterType>(ExtensionFilter.ALL);
   const { toggleDarkMode } = useDarkMode()

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

  const handleRemoveExtension = (extensionName: string) => {
    setExtensions((prev) => [...prev].filter((ext) => ext.name !== extensionName));
  };

  const handleToggleMode = () => toggleDarkMode();
  

  
  return (
    <> 
    <div id="app">
      <Header onToggleMode={handleToggleMode} />
      <main>
        <section id="extensions_intro">
          <h1>Extensions List</h1>
          <ul className="extensions_filter-list">
              {Object.values(ExtensionFilter).map((filterType) => (
                <li key={filterType}>
                  <button
                    aria-pressed={filter === filterType}
                    onClick={() => handleFilterExtensions(filterType)} 
                    className={filter === filterType ? 'active' : ''}>
                    {filterType.charAt(0).toUpperCase() + filterType.slice(1).toLowerCase()}
                  </button>
                </li>
              ))}
          </ul>
        </section>
        <section id="extension_list">
            <ExtensionsList 
              onRemove={handleRemoveExtension}
              onToggle={toggleExtension} 
              extensionList={filteredExtensionList} 
            />
        </section>
      </main>
    </div>
    </>
  )
}

export default App
