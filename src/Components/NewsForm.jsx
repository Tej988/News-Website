import React ,{useState , useEffect} from 'react'
import './css/editor.css'
import { useHistory, NavLink } from 'react-router-dom'
import Axios from 'axios';


const NewsForm = (props) => {

    const [Task ,setTask] = useState({});
        const { setUserState } = props;
      const history = useHistory() 

    const onSubmitClick = async (event) => {
        event.preventDefault();
        console.log(Task);
        await Axios.post("http://localhost:9000/create", Task)
            .then(({ data }) => {
                localStorage.setItem("Task", JSON.stringify(data));
                console.info(data);
                setUserState(data.Task);
                history.push("/");
                window.alert("your data sumbit successfully")
               
            })
            .catch((error) => {
                console.error(error);
            });
    };

  
    



    return (

        
        
        <div className="body"> 
        <div class="container">
            <div class="text">
                Editor News Form
            </div>
            <form action="#">
                <div class="form-row">
                    <div class="input-data">
                        <input type="text" required  id="url" onChange={(e) => {setTask({...Task,url: e.target.value,});}} />
                        <div class="underline"></div>
                        <label for="">Image <strong>URL</strong></label>
                    </div>
                    <div class="input-data">
                        <input type="text" required  id="heading" onChange={(e) => {setTask({...Task, heading: e.target.value,});}}/>
                        <div class="underline"></div>
                        <label for=""> News Heading</label>
                    </div>
                </div>
                <div class="form-row">
                 <div class="input-data">
                        <input type="date" required  id="data" onChange={(e) => {setTask({...Task,postdate: e.target.value,});}}/>
                        <div class="underline"></div>
                        <label for=""></label>
                    </div>
                    <div class="input-data">
                        <input type="text" required  id="author" onChange={(e) => {setTask({...Task,author: e.target.value,});}}/>
                        <div class="underline"></div>
                        <label for="">Author</label>
                    </div>
                   

                </div>
                <div class="form-row">
                    <div class="input-data textarea">
                        <textarea rows="8" cols="80" required  id="content" onChange={(e) => {setTask({...Task,content: e.target.value,});}}></textarea>
                        <br />
                        <div class="underline"></div>
                        <label for="">Write your News Content</label>
                        <br />
                        <div class="form-row submit-btn">
                            <div class="input-data">
                                <div class="inner"></div>
                                {/* <input type="submit" value="submit" /> */}
                              
                                
                            </div>
                            <button type="submit" onClick={onSubmitClick}>Sumbit</button>
                            <span className="cancel_btn"> <NavLink exact to="/"> <button>Home</button>
                                </NavLink> </span>

                        </div>
                    </div>
                </div>
      </form>       
               
                </div>
                </div>
                    )}

                export default NewsForm;
