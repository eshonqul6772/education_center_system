import * as Private from 'pages/private';


export default [{
    path: '/group', accessRoles: ['ADMIN'], Page: Private.Group
}, {
    path: '/group/:id', accessRoles: ['ADMIN'], Page: Private.EditGroup
}, {
    path: '/teacher', accessRoles: ['ADMIN'], Page: Private.Teacher
}, {
    path: '/teacher/:id', accessRoles: ['ADMIN'], Page: Private.EditTeacher
}, {
    path: '/user', accessRoles: ['ADMIN'], Page: Private.User
}, {
    path: '/user/:id', accessRoles: ['ADMIN'], Page: Private.EditUser
}, {
    path: '/student', accessRoles: ['ADMIN'], Page: Private.Student
}, {
    path: '/student/:id', accessRoles: ['ADMIN'], Page: Private.EditStudent
}, {
    path: '/subject', accessRoles: ['ADMIN'], Page: Private.Subject
}, {
    path: '/subject/:id', accessRoles: ['ADMIN'], Page: Private.EditSubject
}, {
    path: '/resources', accessRoles: ['ADMIN'], Page: Private.Resources
}, {
    path: '/resources/upload', accessRoles: ['ADMIN'], Page: Private.UploadResources
}, {
    path: '/resources/:hashId', accessRoles: ['ADMIN'], Page: Private.EditSubject
},

];