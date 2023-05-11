import React, { useEffect, useState } from 'react'
import "./news.css"
import NewsCard from './NewsCard.jsx'
import axios from 'axios'

const News = () => {
    const [newsData, setNewsData] = useState([])

    useEffect(() => {

        async function getNewsData() {
            let searchurl = `https://finance-backend-lqvn.onrender.com/news`
            fetch(searchurl).then(response => response.json()).then(result => {
                setNewsData(result)
                console.log(result);
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