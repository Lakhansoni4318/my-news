import React, { useEffect, useState } from 'react'
import Loding from './Loading';
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {
  const CapitalFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1)
  const [loading, setloading] = useState(true)
  const [totalResults, settotalResults] = useState(0)

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true)
    let data = await fetch(url);
    let parseData = await data.json();

    setarticles(parseData.articles)
    settotalResults(parseData.totalResults)
    setloading(false)
    props.setProgress(100);
  }
  useEffect(() => {
    updateNews();
  document.title = `${CapitalFirstLetter(props.category)} - My News`;
    // eslint-disable-next-line
  }, [])

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&category=${props.category}&page=${page + 1}&pageSize=${props.pageSize}`;
    setpage(page + 1);
    setloading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    setarticles(articles.concat(parseData.articles))
    settotalResults(parseData.totalResults)
    setloading(false)
  };
  return (
    <>
      {loading && <Loding />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length !== totalResults}
        loader={<Loding />}>
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} img={element.urlToImage} description={element.description} author={element.author} date={element.publishedAt} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );

}
News.defaultProps = {
  category: 'general',
  country: 'in',
  totalResults: 0,
  pageSize: 8
}