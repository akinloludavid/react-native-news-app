import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import useNews from './src/hooks/useNews';

import SearchBar from './src/components/SearchBar';
import Screen from './src/components/Screen';
import BlogCard from './src/components/BlogCard';
import FeaturedNews from './src/components/FeaturedNews';
import SmallCard from './src/components/SmallCard';
import BreakingNews from './src/components/BreakingNews';
import TechNews from './src/components/TechNews';
import data from './fakeData'
import FlatCard from './src/components/FlatCard';
import PoliticalNews from './src/components/PoliticalNews';
import Entertainment from './src/components/Entertainment';



export default function App() {
  const [
    featuredNews,
    politicalNews,
    entertainmentNews,
    techNews,
    breakingNews
  ] = useNews()

return (
    <Screen>
      <SearchBar/>
      <FeaturedNews item = {featuredNews}/>
      <BreakingNews data = {breakingNews}/>
      <TechNews data = {techNews}/> 
      <PoliticalNews data = {politicalNews}/>
      <Entertainment data ={entertainmentNews}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
