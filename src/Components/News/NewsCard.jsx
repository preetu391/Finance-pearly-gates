import React from 'react'
import "./news.css"

const NewsCard = (props) => {
    let data=props.news
    console.log(data);
    return (
        <div>
            <div className='row'><div class="job-box d-md-flex align-items-center justify-content-between mb-3">
                <div class="job-left d-md-flex align-items-center flex-wrap">

                    <div class="job-content">

                        <ul class="ul-list-css d-md-flex flex-wrap text-capitalize ff-open-sans">
                            <li>
                                <a href={data?.url} target="_blank" style={{ textDecoration: "none", color: "black" }} ><h5 class="problem-list-hover-css">
                                    <img width="100px" src={data?.urlToImage}/>

                                    &nbsp;&nbsp;&nbsp;{data?.title}</h5></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="job-right my-4 flex-shrink-0">
                    <a href={data?.url}  target="_blank" style={{ textDecoration: "none" }} ><button style={{ textDecoration: "none" }} class="button">Visit</button></a>
                </div>
            </div></div>
        </div>
    )
}

export default NewsCard