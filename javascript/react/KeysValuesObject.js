import React from 'react';

export default function KeysValuesObject({ obj, onSelect, className = ''}){

 return (
  <div onClick={onSelect} className={className}>
   {Object.entries(obj).map(([key, value], i) => {
    return (
     <div key={i}>
      Key {key} | Value: {value}
     </div>
    );
   })}
  </div>
 );
}
