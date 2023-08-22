import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import * as Dashboard from "pages/Dashboard";
import * as AuthPage from "./pages";
import * as Components from "./components";
import * as Layout from "./layout";

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/" element={<AuthPage.Home />} />
        <Route exact path="/studentlogin" element={<AuthPage.StudentLogin />} />
        <Route path="/staff" element={<AuthPage.Staff />} />
        <Route path="/admin" element={<AuthPage.AdminLogin />} />
        <Route path="/teacher" element={<AuthPage.TeacherLogin />} />
        <Route path="support" element={<AuthPage.Support />} />
      </Routes>
    );
  }
  return (
    <>
      <div className="dashboard">
        <div style={{ inlineSize: "18%" }}>
          <Layout.Menu />
        </div>

        <div style={{ inlineSize: "82%" }}>
          <Layout.Navbar />

          <Routes>
            <Route path="/dashboard" element={<Dashboard.DashboardHome />} />

            <Route path="/group" element={<Dashboard.Group />} />
            <Route path="/group/:id" element={<Dashboard.EditGroup />} />

            <Route path="/teacher" element={<Dashboard.Teacher />} />
            <Route path="/teacher/:id" element={<Dashboard.EditTeacher />} />

            <Route path="/user" element={<Dashboard.User />} />
            <Route path="/user/:id" element={<Dashboard.EditUser />} />

            <Route path="/student" element={<Dashboard.Student />} />
            <Route path="/student/:id" element={<Dashboard.EditStudent />} />

            <Route path="/subject" element={<Dashboard.Subject />} />
            <Route path="/subject/:id" element={<Dashboard.EditSubject />} />

            <Route path="/resources" element={<Dashboard.Resources />} />
            <Route
              path="/resources/upload"
              element={<Dashboard.UploadResoursec />}
            />

            <Route path="*" element={<Components.Errorpage />} />
          </Routes>
        </div>
      </div>
      <Components.GetTime />
    </>
  );
}

export default App;
