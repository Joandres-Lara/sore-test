export default function useListActive({ data }){
 const items = data;
 const [indexActive, setIndexActive] = React.useState(null);

 return {
  items, indexActive, setIndexActive
 }
}
