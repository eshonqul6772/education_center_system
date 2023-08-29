import {AiOutlineTeam, AiOutlineDashboard} from 'react-icons/ai';
import {PiStudentBold} from 'react-icons/pi';
import {MdGroups2, MdOutlineSubject} from 'react-icons/md';
import {LiaUserCircleSolid} from 'react-icons/lia';
import {BsFillClipboard2DataFill} from 'react-icons/bs';


const menuData = [
    {
        accessRoles: ['STUDENT', 'ADMIN', 'TEACHER'],
        path: '/dashboard',
        title: (
            <>
                <AiOutlineDashboard size="30px"/> <span>Dashboard</span>
            </>
        ),
    },
    {
        accessRoles: ['ADMIN'],
        path: '/user',
        title: (
            <>
                <LiaUserCircleSolid size="30px"/> <span>User</span>
            </>
        ),
    },
    {
        accessRoles: ['ADMIN'],
        path: '/teacher',
        title: (
            <>
                <AiOutlineTeam size="30px"/> <span>Teacher</span>
            </>
        ),
    },
    {
        accessRoles: ['ADMIN'],
        path: '/group',
        title: (
            <>
                <MdGroups2 size="30px"/> <span>Group</span>
            </>
        ),
    },
    {
        accessRoles: ['ADMIN'],
        path: '/student',
        title: (
            <>
                <PiStudentBold size="30px"/> <span>Student</span>
            </>
        ),
    },
    {
        accessRoles: ['ADMIN'],
        path: '/subject',
        title: (
            <>
                <MdOutlineSubject size="30px"/> <span>Subject</span>
            </>
        ),
    },

    {
        accessRoles: ['ADMIN'],
        path: '/resources',
        title: (
            <>
                <BsFillClipboard2DataFill size="30px"/> <span>Resources</span>
            </>
        ),
    },

    {
        accessRoles: ['ADMIN'],
        path: '/test',
        title: (
            <>
                <MdOutlineSubject size="30px"/> <span>Test</span>
            </>
        ),
    },

];

export default menuData;
