import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {HiOutlineRefresh} from 'react-icons/hi';
import {Select} from 'antd';

const {Option, OptGroup} = Select;


import GetGroup from 'services/group.service';
import getSubject from 'services/subject.service';
import Button from 'components/Button';

const EditGroup = () => {
    const navigate = useNavigate()
    const {id} = useParams();


    const [subject, setSubject] = useState([]);
    const [values, setValues] = useState({
        name: '',
        subject_id: '',
        status: '',
        subjectValue: '',
    });

    useEffect(() => {
        GetGroup.getGroup(id)
            .then((res) => {
                console.log(res.data);
                const {name, subject, status} = res.data;
                setValues({
                    name,
                    subject_id: subject.id,
                    subjectValue: subject.name,
                    status,
                });
            })
            .catch((err) => console.log(err));
    }, [id]);

    console.log(values.subjectValue);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setTimeout(() => {
            GetGroup.ubdate(id, values)
                .then((res) => {
                    navigate('/groups');
                })
                .catch((err) => {
                    console.log(err);
                });
        }, 2000)

    };

    useEffect(() => {
        getSubject.getAll().then((response) => {
            setSubject(response.data);
        });
    }, []);


    return (
        <>
            <div className="table__box">
                <form onSubmit={handleSubmit} className="form-texnolgy">
                    <div>
                        <div className="form__list">
                            <div>
                                <div className="d-flex flex-column mb-3">
                                    <label className="form__category-lable" htmlFor="">
                                        group_name
                                    </label>
                                    <input className="form-control"
                                           onChange={(e) =>
                                               setValues({...values, name: e.target.value})
                                           }
                                           type="text"
                                           placeholder="group name"
                                           defaultValue={values.name}
                                    />
                                </div>

                                <div className="d-flex flex-column mb-3">
                                    <label className="form__category-lable" htmlFor="">
                                        subject
                                    </label>
                                    <Select
                                        onSelect={(e) => setValues({...values, subject_id: e})}
                                        style={{
                                            width: 515,
                                        }}
                                        defaultValue={values.subjectValue}
                                        options={subject.map((item) => ({
                                            value: item.id,
                                            label: item.name,
                                        }))}
                                    />

                                    <Select
                                        className="mt-4"
                                        onSelect={(e) => setValues({...values, status: e})}
                                        defaultValue="ACTIVE"
                                        style={{width: 515}}
                                    >
                                        <OptGroup label="status">
                                            <Option value="ACTIVE">ACTIVE</Option>
                                            <Option value="NOACTIVE">NO_ACTIVE</Option>
                                        </OptGroup>
                                    </Select>
                                </div>

                                <div className="d-flex gap-2">
                                    <Button title="save_edit" variant="success" type="sumit"/>
                                    <Button onClick={() => navigate('/subject')}
                                            title={<HiOutlineRefresh fontSize="20px"/>} variant="secondary"
                                            type="button"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditGroup;
