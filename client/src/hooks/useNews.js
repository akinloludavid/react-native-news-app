import React, {useEffect, useState} from 'react';
import newsApi from '../../api/newsApi';
 const useNews =()=>{
  const [featuredNews, setFeaturedNews] = useState({})
  const [breakingNews, setBreakingNews] = useState([])
  const [politicalNews, setPoliticalNews] = useState([])
  const [techNews, setTechNews] = useState([])
  const qty = 5;
  const [entertainmentNews, setEntertainmentNews] = useState([])

  const filterByCategory = (data, category) => {
    const result = data.filter(item => item.category === category).reverse().splice(0, qty)

    if(result.length){
      result.push({type:"viewmore", category, id:category})
    }
    return result
  }

  const filterMultipleNews = async () => {
    const allNews = await newsApi.getAll()
    const featured = allNews.filter(item => item.featured === 'on').reverse()[0]
    setFeaturedNews(featured)
    setBreakingNews(filterByCategory(allNews, 'breaking-news'))
    setTechNews(filterByCategory(allNews, 'tech'))
    setPoliticalNews(filterByCategory(allNews, 'political'))
    setEntertainmentNews(filterByCategory(allNews, 'entertainment'))
  }
  useEffect(() => {
    filterMultipleNews()
  }, [])

  return [
    featuredNews,
    politicalNews,
    entertainmentNews,
    techNews,
    breakingNews
  ]
}

export default useNews