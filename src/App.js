import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux"


<<<<<<< HEAD
import Navbar from "./layout/Navbar"
=======

>>>>>>> origin/main
import Home from "./pages/Home"
import StudentLogin from "./pages/StudenLogin";
import Staf from "./pages/Staf";
import AdminLogin from "./pages/AdminLogin";
import TeacherLogin from "./pages/TeacherLogin"
import Dashboard from "./pages/Dashboard"
<<<<<<< HEAD
import Group from "./pages/Dashboard/Group"
import Menu from "./layout/Menu/Menu";
import Team from "./pages/Dashboard/Team";
import User from "./pages/Dashboard/User";
import Student from "./pages/Dashboard/Student";

function App() {
    
    const { isLoggedIn } = useSelector((state) => state.auth);

    if (!isLoggedIn) {
      return (
        <Routes>
          <Route  path='/' element={<Home/>} />
           <Route exact path='/students' element={<StudentLogin/>} />
          <Route path='/staf' element={<Staf/>}/>
          <Route path='/admin' element={<AdminLogin/>}/>
          <Route path="/teacher" element={<TeacherLogin/>}/>
        </Routes>
      );
    }
=======

function App() {

>>>>>>> origin/main
   

    return (
        <>
<<<<<<< HEAD


            <div className="dashboard">
           
           
                <div style={{width:"18%"}}>
                  <Menu/>
                 </div>
            
             <div style={{width:"82%"}}>
                <Navbar/>
            <Routes>

             <Routes>
                <Route path="/dasbaord"  element={<Dashboard/>}/>

                <Route path="/" element={<Home/>}/>
                 <Route path="/dashbaord"  element={<Dashboard/>}/>
                 <Route path='/group' element={<Group/>}/>
                 <Route path="/team" element= {<Team/>}/>
                 <Route path='/user' element={<User/>}/>
                 <Route path='/student' element={<Student/>}/>
            </Routes>
<<<<<<< HEAD
            </div>
            </div>

=======
>>>>>>> origin/main
        </>
    );
}

export default App;
