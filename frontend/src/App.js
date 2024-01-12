
import Login from "./components/login"
import Register from "./components/Register";
import UserDetails from "./components/userDetails";
import SignUP  from "./components/signup_component";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const  isLoggedIn = window.localStorage.getItem("loggedIn");
  return (

    <>
    <Router>
      <Routes>
        <Route path="/login" element={isLoggedIn ==true ? <UserDetails/> : <Login/>}/>
        <Route path="/register" element={< Register/>}/>
        <Route path="/signup" element={< SignUP/>}/>
        <Route path="/userDetails" element={< UserDetails/>}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
