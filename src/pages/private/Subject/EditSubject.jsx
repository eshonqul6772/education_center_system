import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {HiOutlineRefresh} from 'react-icons/hi'
import toast, {Toaster} from 'react-hot-toast';

import ServicesSubject from 'services/subject.service.js';
import Button from 'components/Button';


const EditSubject = () => {
    const {id} = useParams();
    const navigate = useNavigate('');

    const [values, setValues] = useState({
        name: '',
    });


    useEffect(() => {
        ServicesSubject.getSubject(id)
            .then((res) => {
                console.log(res.data)
                const {name} = res.data;
                setValues({name, status: 'ACTIVE'});
            })
            .catch((err) => console.log(err));
    }, [id]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.success('success update data')
        setTimeout(()=>{

           ServicesSubject.ubdate(id, values)
               .then((res) => {

               }).catch((err) => {
               console.log(err);
           });
       },2000)
    }


    return (
        <div className="table__box">

            <Toaster
                position="top-right"
                reverseOrder={true}
            />
            <form onSubmit={handleSubmit} className="form-texnolgy">
                <div>
                    <div className="form__list">
                        <div>
                            <div className="d-flex flex-column mb-3">
                                <label className="form__category-lable" htmlFor="">
                                    subject_name
                                </label>

                                <input
                                    onChange={(e) => setValues({...values, name: e.target.value})}
                                    type="text"
                                    placeholder="subject name"
                                    defaultValue={values.name}
                                />
                            </div>

                           <div className='d-flex gap-2'>
                               <Button title="save_edit" variant="success" type="sumit"/>
                               <Button onClick={()=> navigate('/subject')} title={<HiOutlineRefresh fontSize='20px'/>} variant='secondary' type='button'/>
                           </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditSubject;
