import type { ExtensionFilterType } from "../../types";
import "./ExtensionFilterList.css"

interface ExtensionFilterListProps {
    ExtensionFilter: { [key: string]: ExtensionFilterType };
    onHandleFilter: (filterExtension: ExtensionFilterType) => void;
    filter: string;
 }

export const ExtensionFilterList : React.FC<ExtensionFilterListProps> = ({
    ExtensionFilter, 
    onHandleFilter, 
    filter, 
}) => {

    return (
     <ul className="extensions_filter-list">
      {Object.values(ExtensionFilter).map((filterType) => (
        <li key={filterType}>
           <button
             aria-pressed={filter === filterType}
             onClick={() => onHandleFilter(filterType)} 
             className={filter === filterType ? 'active' : ''}>
             {filterType.charAt(0).toUpperCase() + filterType.slice(1).toLowerCase()}
           </button>
         </li>))}
      </ul>
    )

}