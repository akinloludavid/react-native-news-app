import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Title from './Title'
import Subtitle from './Subtitle'
import { BlogCardStyle } from '../../globalStyles/styles'
const BlogCard = ({style, imageStyle, item}) => {
  const {thumbnail, title, desc} = item
  return (
    <View style={[styles.container, style]}>
      <Image style = {[BlogCardStyle.image, imageStyle]} source = {{uri:thumbnail}}/>
      <View style = {BlogCardStyle.contentContainer}>
        <Title>{title}</Title>
        <Subtitle>{desc}</Subtitle>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:300,
    borderRadius:8,
    overflow:'hidden',
    backgroundColor:'#fff'
  }
})
export default BlogCard
