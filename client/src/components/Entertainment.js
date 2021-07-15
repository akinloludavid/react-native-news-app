import React from 'react'
import { View, Text } from 'react-native'
import VerticalList from './VerticalList'

const Entertainment = ({data}) => {
  return (
    <VerticalList title = "Entertainment" data ={data}/>
  )
}

export default Entertainment
