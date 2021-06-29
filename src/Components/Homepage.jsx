import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './css/home.css';
import Carousel from './Carousel'
import Card from '../NewsComponent/Card';


const Homepage = (props) => {
  const { user } = props;
  const {news1} = props;
  const [news, setNews] = useState([{}]);
  const [view , setViews] = useState([{}]);

  useEffect(() => {
    if (Object.keys(news).length > 0) {
      console.log(news._id);

      const fetchTasks = async () => {
        await Axios.get(`http://localhost:9000/getNews/${news._id}`)
          .then(({ data: foundTasks }) => {
            console.info("All tasks were found.");
            console.info(foundTasks);
            setNews(foundTasks);
            console.log(setNews);
          })
          .catch((error) => {
            console.error("Some error occurred.", error);
          });
      };
      fetchTasks();
    }
  }, [news]);



  useEffect(() => {
    if (Object.keys(view).length > 0) {
      console.log(view._id);

      const fetchTasks = async () => {
        await Axios.get(`http://localhost:9000/getNews/${news1._id}`)
          .then(({ data: foundTasks }) => {
            console.info("All tasks were found.");
            console.info(foundTasks);
            setViews(foundTasks);
            console.log(setViews);
          })
          .catch((error) => {
            console.error("Some error occurred.", error);
          });
      };
      fetchTasks();
    }
  }, [view]);



  return (
    <div>

      {news.map(() => {
        return (
          <div>
            <h1 className={"user_heading"} >Welcome , {user.firstName}  </h1>
            </div>
            )
            })}
          
           <Carousel/>
       
           {/* {view.map(() => {
        return (
          <div>
            <h1 className={"user_heading"} >Welcome , {news1.heading}  </h1>
            </div>
            )
            })} */}
         
            <Card/>
          </div>
        )
      }

export default Homepage

