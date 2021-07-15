import React from 'react'
import { View, FlatList } from 'react-native'
import Title from './Title'
import VerticalCard from './VerticalCard'
const VerticalList = ({title, data}) => {
  return (
    <View>
      <Title>{title}</Title>
      <View style={{marginVertical:15}}>
        <FlatList data = {data}
          keyExtractor ={item=>item.id} 
          renderItem={({item}) => <VerticalCard item ={item}/>}
        />
        {/* {data.map(item=><FlatCard item= {item} key = {item.id}/>)} */}
      </View>
    </View>
  )
}

export default VerticalList
