import React from 'react'
import { View, Text } from 'react-native'
import VerticalList from './VerticalList'

const PoliticalNews = ({data}) => {
  return (
    <VerticalList title = "Politics" data = {data}/>
  )
}

export default PoliticalNews
