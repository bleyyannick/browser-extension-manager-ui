import type { ExtensionFilterType } from "../../types";
import "./ExtensionFilterList.css"

interface ExtensionFilterListProps {
    filterOptions: { [key: string]: ExtensionFilterType };
    onFilterChange: (filterExtension: ExtensionFilterType) => void;
    filter: string;
 }

export const ExtensionFilterList : React.FC<ExtensionFilterListProps> = ({
    filterOptions, 
    onFilterChange,
    filter, 
}) => {

    return (
     <ul className="extensions_filter-list">
      {Object.values(filterOptions).map((filterType) => (
        <li key={filterType}>
           <button
             aria-pressed={filter === filterType}
             onClick={() => onFilterChange(filterType)} 
             className={filter === filterType ? 'active' : ''}>
             {filterType.charAt(0).toUpperCase() + filterType.slice(1).toLowerCase()}
           </button>
         </li>))}
      </ul>
    )

}