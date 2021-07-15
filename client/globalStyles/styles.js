import { StyleSheet } from 'react-native'


export const SearchStyles = StyleSheet.create({
  container:{
    width:'100%',
    height:50,
    backgroundColor:'#ffffff',
    borderRadius:8,
    justifyContent:'center',
    marginVertical: 20
     
  },
  searchInput:{
    width:'100%',
    height:'100%',
    paddingLeft:8,
    fontSize:16
  }
})

export const BlogCardStyle = StyleSheet.create({
  container:{
    width:'100%',
    height:300,
    borderRadius:8,
    overflow:'hidden',
    backgroundColor:'#fff',
   
  },
  image:{
    width:'100%',
    height:200
  },
  contentContainer:{
    padding:5
  }
})