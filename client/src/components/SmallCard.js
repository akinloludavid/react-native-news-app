import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import BlogCard from './BlogCard'
import ViewMore from './ViewMore'
const SmallCard = ({item}) => {
  if(item.type ==="viewmore"){
    return <ViewMore style = {styles.viewmore}/>
  }
  return (
    <BlogCard item ={item} style = {styles.container} imageStyle = {styles.image}/>
  )
}
const styles = StyleSheet.create({
  container:{
    width:150,
    marginRight:15,
    height:200,
  },
  image:{
    height:100
  },
  viewmore:{
    width: 150,
    height: 200,
  }
})

export default SmallCard
