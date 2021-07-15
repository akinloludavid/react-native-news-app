import React from 'react'
import {View, StyleSheet} from 'react-native'
import ViewMore from './ViewMore'
import FlatCard from './FlatCard'

const VerticalCard = ({item}) => {
  if(item.type ==="viewmore"){
    return <ViewMore/>
  }
  return ( 
    <FlatCard item ={item}/>
   );
}
 
export default VerticalCard;