import React from 'react'
import NewsCard from './NewsCard'
import NewsData from './NewsData'
const Card = () => {

    return (
<div>


        


        <div>
        {
            NewsData.map((val)=>{
                return(
            <NewsCard 
                url={val.urlToImage}
                title={val.title}
                description={val.description}
                author={val.author}
                publishedAt={val.publishedAt}
            />
            
        )
            })
        }
           
        </div>
        </div>

    )
}

export default Card
