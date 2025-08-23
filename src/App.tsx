import './App.css'
import { Header } from './components/Header/Header'
import { ExtensionsList } from './components/ExtensionsList/ExtensionsList';
import { ExtensionFilter, type ExtensionFilterType} from './types';
import { useDarkMode } from './hooks/useDarkMode';
import { ExtensionFilterList } from './components/ExtensionFilterList/ExtensionFilterList';
import { useExtensionsManager } from './hooks/useExtensionsManager';
import { useState } from 'react';
import data from '../data.json';

function App() {

  const [filter, setFilter] = useState<ExtensionFilterType>(ExtensionFilter.ALL);

  const handleFilterExtensions = (filterExtension: ExtensionFilterType) => {
      if (filter === filterExtension) return;
      setFilter(filterExtension);
    };

  const { 
     handleRemoveExtension, 
     toggleExtension, 
     filteredExtensionList, 
      } = useExtensionsManager( data, filter );
 
  const { toggleDarkMode } = useDarkMode()
  
  return (
    <div id="app">
      <Header onToggleMode={toggleDarkMode} />
      <main>
        <section id="extensions_intro">
          <h1>Extensions List</h1>
           <ExtensionFilterList
              filter={filter}
              onFilterChange={handleFilterExtensions}
              filterOptions={ExtensionFilter}
           />
        </section>
        <section id="extension_list">
          {filteredExtensionList.length === 0 ? 
              <p role="status">No extensions found</p> :
              <ExtensionsList 
                onRemove={handleRemoveExtension}
                onToggle={toggleExtension} 
                extensionList={filteredExtensionList} 
              /> }
        </section>
      </main>
    </div>
  )
}

export default App
