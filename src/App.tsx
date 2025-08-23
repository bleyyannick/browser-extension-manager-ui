import './App.css'
import { Header } from './components/Header/Header'
import { ExtensionsList } from './components/ExtensionsList/ExtensionsList';
import { ExtensionFilter} from './types';
import { useDarkMode } from './hooks/useDarkMode';
import { ExtensionFilterList } from './components/ExtensionFilterList/ExtensionFilterList';
import { useExtensions } from './hooks/useExtensions';
import { useFilterExtensions } from './hooks/useFilterExtensions';

function App() {
  const { extensions, handleRemoveExtension, toggleExtension } = useExtensions();
  const { filteredExtensionList, handleFilterExtensions, filter } = useFilterExtensions(extensions);
  const { toggleDarkMode } = useDarkMode()
  
  return (
    <div id="app">
      <Header onToggleMode={toggleDarkMode} />
      <main>
        <section id="extensions_intro">
          <h1>Extensions List</h1>
           <ExtensionFilterList
              filter={filter}
              onHandleFilter={handleFilterExtensions}
              ExtensionFilter={ExtensionFilter}
           />
        </section>
        <section id="extension_list">
          {filteredExtensionList.length === 0 ? 
              <p >No extensions found</p> :
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
