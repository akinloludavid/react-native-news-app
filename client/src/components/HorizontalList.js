import React from 'react'
import { View, FlatList} from 'react-native'
import SmallCard from './SmallCard'
import Title from './Title'
const HorizontalList = ({title, data}) => {
  return (
    <>
      <Title size={20}>{title}</Title>
      <View style={{marginVertical:20}}>
        <FlatList data = {data}
          keyExtractor ={item=>item.id} 
          horizontal showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <SmallCard item ={item}/>}
        />
      </View>
    </>
  )
}

export default HorizontalList
