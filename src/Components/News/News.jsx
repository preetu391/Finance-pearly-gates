import React, { useEffect, useState } from 'react'
import "./news.css"
import NewsCard from './NewsCard.jsx'

const News = () => {
    const [newsData, setNewsData] = useState([])

    useEffect(() => {

        async function getNewsData() {
            let searchurl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8cf3185411c241818bf837eec011f6a5`
            fetch(searchurl).then(response => response.json()).then(result => {
                setNewsData(result?.articles)
                // console.log(result?.articles);
            })
        }
        getNewsData()
    }, [])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {/* <h1 className='news-head'>News :)</h1> */}

                    </div>
                </div>
                <div className="row mt-5">
                    {newsData?.map(data => {
                        return (
                            <NewsCard news={data} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default News