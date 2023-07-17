import { Route, Routes} from "react-router-dom";


import Home from "./pages/Home"
import StudentLogin from "./pages/StudenLogin";
import Staf from "./pages/Staf";
import AdminLogin from "./pages/AdminLogin";
import TeacherLogin from "./pages/TeacherLogin"

function App() {
    return (
        <>
         
             <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/staf' element={<Staf/>}/>
                <Route path='/admin' element={<AdminLogin/>}/>
                <Route path="/teacher" element={<TeacherLogin/>}/>
                <Route path="/students" element={<StudentLogin/>}/>
            </Routes>
       
        </>
    );
}

export default App;
