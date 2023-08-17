import {Route, Routes} from 'react-router-dom';

import {useSelector} from 'react-redux';

import Navbar from 'layout/Navbar';
import Menu from 'layout/Menu';
import AdminLogin from 'pages/AdminLogin';
import StudentLogin from 'pages/StudenLogin/StudentLogin';
import TeacherLogin from 'pages/TeacherLogin';
import Staff from 'pages/Staf';
import Home from 'pages/Home';
import Group from 'pages/Dashboard/Group';
import EditGroup from 'pages/Dashboard/Group/EditGroup';
import Teacher from 'pages/Dashboard/Teacher';
import EditTeacher from 'pages/Dashboard/Teacher/EditTeacher';
import User from 'pages/Dashboard/User';
import Student from 'pages/Dashboard/Student';
import EditStudent from 'pages/Dashboard/Student/EditSudent';
import Subject from 'pages/Dashboard/Subject';
import EditSubject from 'pages/Dashboard/Subject/EditSubject';
import Support from 'pages/Support';
import Test from 'pages/Dashboard/Test';
import ErrorPage from 'components/ErrorPage/ErrorPage';
import Dashboard from 'pages/Dashboard/Dashboard';
import GetTime from 'components/getTime/';
import Search from 'components/Search/Search';
import EditUser from './pages/Dashboard/User/EditUser';

function App() {
    const {isLoggedIn} = useSelector((state) => state.auth);


    if (!isLoggedIn) {
        return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route exact path="/studentlogin" element={<StudentLogin/>}/>
                <Route path="/staff" element={<Staff/>}/>
                <Route path="/admin" element={<AdminLogin/>}/>
                <Route path="/teacher" element={<TeacherLogin/>}/>
                <Route path="support" element={<Support/>}/>
            </Routes>
        );
    }
    return (
        <>
            <div className="dashboard">
                <div style={{inlineSize: '18%'}}>
                    <Menu/>
                </div>

                <div style={{inlineSize: '82%'}}>
                    <Navbar/>
                    <Search/>

                    <Routes>
                        <Route path="/dashboard" element={<Dashboard/>}/>

                        <Route path="/group" element={<Group/>}/>

                        <Route path="/group/:id" element={<EditGroup/>}/>

                        <Route path="/teacher" element={<Teacher/>}/>

                        <Route path="/teacher/:id" element={<EditTeacher/>}/>

                        <Route path="/user" element={<User/>}/>

                        <Route path="/user/:id" element={<EditUser/>}/>

                        <Route path="/student" element={<Student/>}/>

                        <Route path="/student/:id" element={<EditStudent/>}/>

                        <Route path="/subject" element={<Subject/>}/>

                        <Route path="/subject/:id" element={<EditSubject/>}/>

                        <Route path="/test" element={<Test/>}/>

                        <Route path="*" element={<ErrorPage/>}/>
                    </Routes>
                </div>
            </div>
            <GetTime/>
        </>
    );
}

export default App;
