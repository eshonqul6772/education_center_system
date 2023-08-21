import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import toast, {Toaster} from 'react-hot-toast';

import ServicesSubject from 'services/subject.service.js'
import Button from 'components/Button'


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

       setTimeout(()=>{
           toast.success('success update data')
           ServicesSubject.ubdate(id, values)
               .then((res) => {

                   navigate('/subject');
               }).catch((err) => {
               console.log(err);
           });
       },1000)
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

                            <Button title="edit_subject" variant="primary" type="sumit"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditSubject;
