import './App.css'
import { Header } from './components/Header/Header'
import data from '../data.json'; 
import { ExtensionsList }from './components/ExtensionsList/ExtensionsList';
import { ExtensionFilter, type Extension, type ExtensionFilterType } from './types';
import { useState } from 'react';


function App() {

   const [filteredExtensionList, setFilteredExtensionList] = useState<Extension[]>(data);
   const [filter, setFilter] = useState<ExtensionFilterType>(ExtensionFilter.ALL);


  const handleFilterExtensions = (filterExtension: ExtensionFilterType) => { 
    if (filter === filterExtension) return;
    let filteredExtensions: Extension[] = [];
    switch (filterExtension) {
      case ExtensionFilter.ACTIVE:
        filteredExtensions = data.filter((extension: Extension) => extension.isActive);
        break;
      case ExtensionFilter.INACTIVE:
        filteredExtensions = data.filter((extension: Extension) => !extension.isActive);
        break;
      default:
        filteredExtensions = data;
    }
    
    setFilteredExtensionList(filteredExtensions);
    setFilter(filterExtension);
  }
  
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
          <ExtensionsList extensionList={filteredExtensionList} />
        </section>
     </main>
    </>
  )
}

export default App
