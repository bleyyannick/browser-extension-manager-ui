import SlidingButton from '../SlidingButton/SlidingButton';
import './extensions.css';
import type {  ExtensionsListProps } from '../../types';
import { ExtensionItem } from '../ExtensionItem/ExtensionItem';

export const ExtensionsList = ({
  extensionList,
  onToggle,
  onRemove,
}: ExtensionsListProps ) => {

  return (
    <>
      {extensionList.map((extension) => (
        <ExtensionItem
          key={extension.name}
          extension={extension}
          onRemove={onRemove}
        >
         <SlidingButton 
           isActive={extension.isActive} 
           onClick={() => onToggle(extension.name)}
          />
        </ExtensionItem>
      ))}
    </>
  );
};