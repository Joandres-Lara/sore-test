import useListActive from './useListActive';
import KeysValues from './KeysValuesObject';

import React from 'react';

export default function ListObjects({ data }){
 const { items, setIndexActive, indexActive } = useListActive({ data });

 return (
  <div>
   {items.map((obj, i) => (
    <KeysValues key={i} obj={obj}/>
   ))}
  </div>
 );
}
