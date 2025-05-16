import './App.css'
import { Header } from './components/Header/Header'
import data from '../data.json'; 
import { ExtensionsList }from './components/ExtensionsList/ExtensionsList';

function App() {
  
  return (
    <> 
     <Header />
     <main>
       <section id="extensions_intro">
         <h1>Extensions List</h1>
         <ul className="extensions_filter-list">
            <li>
               <button>All</button>
            </li>
            <li>
               <button>Active</button>
            </li>
            <li>
               <button>Inactive</button>
            </li>
         </ul>
       </section>
       <section id="extensions_list">
          <ExtensionsList extensionList={data} />
        </section>
     </main>
    </>
  )
}

export default App
