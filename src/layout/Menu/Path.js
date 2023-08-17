import { AiOutlineTeam,AiOutlineDashboard } from "react-icons/ai";

import { PiStudentBold } from "react-icons/pi";
import { MdGroups2, MdOutlineSubject } from "react-icons/md";
import { LiaUserCircleSolid } from "react-icons/lia";

const path= [
  {
    path: "/dashboard",
    title: (
      <>
        <AiOutlineDashboard size='30px' /> <span>Dashboard</span>
      </>
    ),
  },
  {
    path: "/user",
    title: (
      <>
        <LiaUserCircleSolid size='30px' /> <span>User</span>
      </>
    ),
  },
  {
    path: "/teacher",
    title: (
      <>
        <AiOutlineTeam size='30px' /> <span>Teacher</span>
      </>
    ),
  },
  {
    path: "/group",
    title: (
      <>
        <MdGroups2 size='30px' /> <span>Group</span>
      </>
    ),
  },
  {
    path: "/student",
    title: (
      <>
        <PiStudentBold size='30px' /> <span>Student</span>
      </>
    ),
  },
  {
    path: "/subject",
    title: (
      <>
        <MdOutlineSubject size='30px' /> <span>Subject</span>
      </>
    ),
  },

  // {
  //   path: "/test",
  //   title: (
  //     <>
  //       <MdOutlineSubject size='30px' /> <span>Test</span>
  //     </>
  //   ),
  // },
];

export default path;
