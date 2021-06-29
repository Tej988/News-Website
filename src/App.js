import React , {useEffect , useState} from "react";
import Homepage from "./Components/Homepage";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from "./Components/login";
import Signup from './Components/Signup';
import Create from './Components/NewsForm';
// import Notes from './Components/NewsShow';




 const App = ()  =>{

  const [user, setUser] = useState({});
  const [news1 , setNews] = useState({});

  useEffect(() => {
    let savedUser = localStorage.getItem("user");
    if (savedUser && Object.keys(user).length === 0) {
      setUser(JSON.parse(savedUser));
    }
  }, [user]);

  useEffect(() => {
    let savedUser = localStorage.getItem("notes");
    if (savedUser && Object.keys(news1).length === 0) {
      setNews(JSON.parse(savedUser));
    }
  }, [news1]);
  
  return (


    
    <Router>
          <Switch>
          {/* <Route exact path="/newsform">
           <Addnews setUserState={setUser}/>
           </Route> */}
           <Route exact path="/login" > 
           <Login setUserState={setUser}/>
            </Route> 
            <Route exact path={"/signup"}>
             <Signup setUserState={setUser}/>
              </Route> 
              <Route exact path={"/create"}>
             <Create setUserState={setNews}/>
              </Route> 
              {/* <Route exact path={"/notes"}>
             <Notes setUserState={setNews}/>
              </Route>  */}
         
           <Route exact path="/">
              <Navbar/>
              <Homepage user={user} news1={news1}/>
             
            
              <Footer/>
           
            </Route>
              
              
          </Switch>
    </Router>
  );
}

export default App;
