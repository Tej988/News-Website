import React from 'react'
import './newscard.css'


const NewsCard = (props) => {
    return (
        <div>
         

            <div className="card " >
            <h2>Latest <span class="badge bg-danger">News</span></h2>
            <div className="imgbox">
            <img src={props.url} className="card-img-top" alt="img" />
            </div>
               
                <div className="card-body">
                    <h3 className="card-title">{props.title}</h3>
                    <h5 className="card-title">{props.description}</h5>
                    <p className="card-text">{props.content}</p>
                    <h5 className="card-title">Author: {props.author}</h5>
                    <h5 className="card-title">Post On: {props.publishedAt}</h5>
                   
                </div>
            </div>
        </div>
    )
}

export default NewsCard
