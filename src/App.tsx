import './App.css'
import { Header } from './components/Header/Header'
import data from '../data.json'; 

function App() {

  const extensionsList = data.map((extension) => {
    return ( 
      <article key={extension.logo} className="extension">
        <div className="extension_logo">
          <img src={extension.logo} alt={extension.name} />
        </div>
        <div className="extension_info">
          <h2>{extension.name}</h2>
          <p>{extension.description}</p>
        </div>
        <div className="extension_actions">
          <button>Enable</button>
          <button>Disable</button>
          <button>Remove</button>
        </div>
      </article>
    )

  }); 
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
         {extensionsList} 
        </section>
        <section id="extensions_actions">
          <button>Enable All</button>
        </section>
     </main>
    </>
  )
}

export default App
