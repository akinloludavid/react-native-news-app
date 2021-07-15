import React from 'react'
import { View, Text } from 'react-native'
import HorizontalList from './HorizontalList'
const BreakingNews = ({data}) => {
  return (
    <HorizontalList title = "BreakingNews" data ={data}/>
  )
}

export default BreakingNews
