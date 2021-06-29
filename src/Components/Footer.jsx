import React ,{useState} from 'react'
import './css/footer.css'
// import useHistory from 'react-router-dom'
import Axios from 'axios'


const Footer = (props) => {


    const { setUserState} = props;
    const [user , setUser] = useState([]);
    // const history = useHistory();
    
    const onSumbitClick = async(event)=>{
        event.preventDefault();
        console.log(user);
        await Axios.post("http://localhost:9000/form",user)
        .then(({data})=>{
            console.info(data);
            setUserState(data.user);
            window.alert("successfull send") 
          
            // history.push("/");
        })
        .catch((error)=>{
            console.error(error);
        });
    };

  



    return (
        <div>
             <footer>
      <div className="main-content">
        <div className="left box">
          <h2>About us</h2>
          <div className="content">
            <p>This Projet is Made by the Tej prakash and Dilansh Meen. In this Project we make our own News API and fatch in the cards. In this project you get the News and also links of other News Channels link. </p>
            <div className="social">
              <a href="https://facebook.com/coding.np"><span className="fab fa-facebook-f"></span></a>
              <a href="#"><span className="fab fa-twitter"></span></a>
              <a href="https://instagram.com/coding.np"><span className="fab fa-instagram"></span></a>
              <a href="https://youtube.com/c/codingnepal"><span className="fab fa-youtube"></span></a>
            </div>
          </div>
        </div>

        <div className="center box">
          <h2>Address</h2>
          <div className="content">
            <div className="place">
              <span className="fas fa-map-marker-alt"></span>
              <span className="text">Dholpur , Rajasthan</span>
            </div>
            <div className="phone">
              <span className="fas fa-phone-alt"></span>
              <span className="text">+089-765432100</span>
            </div>
            <div className="email">
              <span className="fas fa-envelope"></span>
              <span className="text">Tejsharma2004@gmail</span>
            </div>
          </div>
        </div>

        <div className="right box">
          <h2>Contact us</h2>
          <div className="content">
            <form action="#">
              <div className="email">
                <div className="text">Email *</div>
                <input type="email" required onChange={(e)=>{setUser({...user,email:e.target.value,})}}/>
              </div>
              <div className="msg">
                <div className="text">Message *</div>
                <textarea rows="2" cols="25" required onChange={(e)=>{setUser({...user,message:e.target.value,})}}></textarea>
              </div>
              <div className="btn">
                <button type="submit" onClick={onSumbitClick}>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom">
        <center>
          <span className="credit">Created By <a href="https://flicker-web.github.io/flicker/">TejPrakash</a> | </span>
          <span className="far fa-copyright"></span><span> 2021 All rights reserved.</span>
        </center>
      </div>
    </footer>
        </div>
    )
}

export default Footer
