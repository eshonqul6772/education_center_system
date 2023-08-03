import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


import SevisesSubject from 'services/subject.service.js'

import Button from 'components/Button'


const EditSubject = () => {
    const { id } = useParams();
    const navigate = useNavigate('');

    const [values, setValues] = useState({
        name: '',
        status: 'ACTIVE'
    });


    useEffect(() => {
        SevisesSubject.getSubject(id)
            .then((res) => {
                const { name, status } = res.data;
                setValues({ name, status });
            })
            .catch((err) => console.log(err));
    }, [id]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        SevisesSubject.ubdate(id, values)
            .then((res) => {
                navigate('/subject');
            }).catch((err) => {
                console.log(err);
            });
    }


    return (
        <form onSubmit={handleSubmit} className="form-texnolgy">
            <div>
                <div className="form__list">
                    <div>
                        <div className="d-flex flex-column mb-3">
                            <label className="form__category-lable" htmlFor="">
                                subject_name
                            </label>
                            
                            <input
                                onChange={(e) => setValues({ ...values, name: e.target.value })}
                                type="text"
                                placeholder="subject name"
                                defaultValue={values.name}
                            />
                        </div>

                        <Button title="edit_subject" variant="primary" type="sumit" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default EditSubject;
