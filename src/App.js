import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Navbar from './layout/Navbar'
import Menu from './layout/Menu'
import AdminLogin from './pages/AdminLogin'
import StudentLogin from './pages/StudenLogin'
import TeacherLogin from './pages/TeacherLogin'
import Staff from './pages/Staf'
import Home from './pages/Home'
import Group from './pages/Dashboard/Group'
import Team from './pages/Dashboard/Team'
import User from './pages/Dashboard/User'
import Student from './pages/Dashboard/Student'
import EditGroup from './pages/Dashboard/Group/EditGroup'
import Subject from './pages/Dashboard/Subject'

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth)

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/studentlogin' element={<StudentLogin />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/teacher' element={<TeacherLogin />} />
      </Routes>
    )
  }
  return (
    <>
      <div className='dashboard'>
        <div style={{ width: '18%' }}>
          <Menu />
        </div>
        <div style={{ width: '82%' }}>
          <Navbar />
          <div className='dashbaord-content'>
            <Routes>
              <Route path='/group' element={<Group />} />
              <Route path='/group/:id' element={<EditGroup />} />
              <Route path='/team' element={<Team />} />
              <Route path='/user' element={<User />} />
              <Route path='/student' element={<Student />} />
              <Route path='/subject' element = {<Subject/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
