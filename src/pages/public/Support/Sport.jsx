// import React, {useState} from "react";
// const Support = () => {
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const [touched, setTouched] = useState({
//     name: false,
//     email: false,
//     phone: false,
//     password: false,
//   });

//   const handleBlur = (event) => {
//     setTouched((prev) => ({
//       ...prev,
//       [event.target.name]: true,
//     }));
//     if (!event.target.validity.valid) {
//       setErrors((prev) => ({
//         ...errors,
//         [event.target.name]: determineErrorMessage(event.target),
//       }));
//     }
//   };

//   const handleChange = (event) => {
//     setValues((prev) => ({
//       ...values,
//       [event.target.name]: event.target.value,
//     }));
//     if (!event.target.validity.valid) {
//       setErrors({
//         ...errors,
//         [event.target.name]: determineErrorMessage(event.target),
//       });
//     }
//   };

//   const determineErrorMessage = (element) => {
//     if (element.validity.valueMissing) {
//       return "This field should not be empty";
//     }
//     if (element.validity.typeMismatch) {
//       return `This field should be of type ${element.type}`;
//     }
//     if (element.validity.tooShort) {
//       return `This field should have at least ${element.minLength} characters.`;
//     }
//     if (element.validity.patternMismatch) {
//       return `The value of this field does not have the valid pattern`;
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Form values", values);
//   };

//   return (
//     <section className="form-wrapper">

//       <form className="d-flex flex-column w-25 mx-auto mt-5 gap-3" onSubmit={handleSubmit} noValidate>
//       <h1>Register to get an icecream :)</h1>
//         <label>
//           Name
//           <input className="form-control"
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             value={values.name}
//             onChange={handleChange}
//             required={true}
//             minLength={2}
//             onBlur={handleBlur}
//             touched={touched.name.toString()}
//           />
//           <small>{errors.name}</small>
//         </label>

//         <label>
//           Email
//           <input className="form-control"
//             type="email"
//             name="email"
//             placeholder="Enter your email address"
//             value={values.email}
//             onChange={handleChange}
//             required={true}
//             pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,4}$"
//             onBlur={handleBlur}
//             touched={touched.email.toString()}
//           />
//           <small>{errors.email}</small>
//         </label>

//         <label>
//           Phone Number
//           <input className="form-control"
//             type="phone"
//             name="phone"
//             placeholder="Enter your phone number"
//             value={values.phone}
//             onChange={handleChange}
//             pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]{9,11}$"
//             onBlur={handleBlur}
//             touched={touched.phone.toString()}
//           />
//           <small>{errors.phone}</small>
//         </label>

//         <label>
//           Password
//           <input className="form-control"
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={values.password}
//             onChange={handleChange}
//             required={true}
//             pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@_$!%*?&]{6,}$"
//             onBlur={handleBlur}
//             touched={touched.password.toString()}
//           />
//           <small>{errors.password}</small>
//         </label>

//         <button className="btn btn-black" type="submit">Submit</button>
//       </form>
//     </section>
//   );
// };
// export default Support;

import React from "react";
import { useFormik } from "formik";


const Sport = () => {

  const initialValues ={
    name:'name',
    email:'email',
    password:'password'
  }

  const validetMesseg = value =>{
    const error = {}

    if(!value.name){
      error.name = 'Required'
    }

    if(!value.email){
      error.email = 'Required'
    }

    if(!value.password){
      error.password = 'Required'
    }

    return error;
  }

  const onSubmit =  value =>{
    console.log('Form data', value);
  }
  

  const formik = useFormik({
    
    initialValues,
    validetMesseg,
    onSubmit
  })

  return (
    <div className="mt-5"> 
      <form className="d-flex gap-2 justify-content-center w-25 mx-auto flex-column" onSubmit={formik.handleSubmit}>
        <input onChange={formik.handleChange}  defaultValue={formik.values.name} type="text" placeholder="name" />
        <input  onChange={formik.handleChange}  defaultValue={formik.values.email} type="email" placeholder="email" />
        <input  onChange={formik.handleChange}  defaultValue={formik.values.password} type="text" placeholder="passwords" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Sport;
