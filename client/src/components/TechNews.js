import React from 'react'
import { View, Text } from 'react-native'
import HorizontalList from './HorizontalList'
const TechNews = ({data}) => {
  return (
    <HorizontalList title = "Tech news" data ={data}/>
  )
}

export default TechNews
