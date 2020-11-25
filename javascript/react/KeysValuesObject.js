import React from 'react';

export default function KeysValuesObject({ obj, onSelect, className = ''}){

 return (
  <div onClick={onSelect} className={className}>
  </div>
 );
}
