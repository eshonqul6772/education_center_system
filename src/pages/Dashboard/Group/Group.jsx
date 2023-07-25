import {useEffect, useState} from 'react';
import { Modal } from 'antd'
import {MdDelete} from 'react-icons/md';

// import ReactPaginate from "react-paginate";


import './Group.scss';
import GetGroupServices from "../../../services/group.service"
import Button from '../../../components/Button';
import AddGroup from "./AddGroup"
import EditGroup from "./EditGroup";
import DeletGroupServisec from "../../../services/group.service.js"

function Group() {

    const [group, setGroup] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataDelet , setDataDelet] = useState()

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const hendelDelet = (id) => {
        const deleted = window.confirm('do you like');
    
        if (deleted) {
            DeletGroupServisec
            .remove(id)
            .then((res) => {
                setDataDelet(res.data);
            })
            .catch((err) => {
              //TODO
              console.log(err);
            });
        }
      
      };



    // const itemsPerPage = 10;
    // const [currentPage, setCurrentPage] = useState(0);

    // const pageCount = Math.ceil(data.length / itemsPerPage);

    // const handlePageChange = ({selected}) => {
    //     setCurrentPage(selected);
    // };

    // const getCurrentPageData = () => {
    //     const start = currentPage * itemsPerPage;
    //     const end = start + itemsPerPage;
    //     return data.slice(start, end);
    // };

   

    useEffect(() => {
        GetGroupServices
            .getAll()
            .then((res) => {
                setGroup(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    
    

    return (
        <>
            <div className='table__box'>
                <table className='table '>
                    <thead className='' style={{backgroundColor: '#003681', color: 'white'}}>
                    <tr className='p-4 table__head'>
                        <th style={{textAlign: 'start'}}>group_name</th>
                        <th></th>
                        <th>subject_name</th>
                        <th style={{textAlign: 'end'}}>operation</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        group.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td style={{textAlign: 'start'}}>{e.name}</td>
                                    <td></td>
                                    <td>{e.subject.name}</td>
                                    <td>
                                        <div className='d-flex align-items-center justify-content-end gap-3'>
                                            <EditGroup/>
                                            <Button variant="danger" title={<MdDelete size='25px'/>} onClick={(e)=> hendelDelet(e.id)}
                                                    className='delet__btn'/>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>

                <div>
                    <AddGroup/>
                </div>

                <Modal footer={null} title="You want to delete this user" open={isModalOpen} onOk={handleOk}
                       onCancel={handleCancel}>
                    <div className='d-flex justify-content-end gap-4 mt-4'>
                        <Button title='cancel' variant='neutral' onClick={handleCancel}/>
                        <Button title='delete' variant='danger-delete' onClick={(e)=> hendelDelet(e.id)}/>
                    </div>
                </Modal>

                {/* <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                /> */}
            </div>
        </>
    );
}

export default Group;
