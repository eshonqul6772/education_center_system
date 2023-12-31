import {useEffect, useState} from 'react';
import {Modal, Pagination, Table} from 'antd';
import {AiOutlineSearch} from 'react-icons/ai'
import {MdDelete, MdModeEdit} from 'react-icons/md';
import {useNavigate} from 'react-router-dom';

import './Group.scss';
import GetGroupServices from 'services/group.service';
import Button from 'components/Button';
import AddGroup from './AddGroup';
import Loader from 'components/Loader';

function Group() {
    const navigate = useNavigate('');
    const [currentPage, setCurrentPage] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(true);

    const hendelDelet = (id) => {
        GetGroupServices.remove(id)
            .then((res) => {
                setData(data.filter((element) => element.id !== id));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const searchData = (name) => {
            setLoading(true)
            GetGroupServices.searchGroup(name, {
                page: currentPage,
                per_page: 3,
                sort: {
                    name: 'id',
                    direction: 'desc',
                },
            }).then((res) => {
                setTotalCount(res.data.totalCount);
                setData(res.data.data);
            }).catch((err) => {
                console.log(err);
            });
            setLoading(false)
    };

    useEffect(() => {
       setTimeout(()=>{
           searchData()
       },1000)
    }, [currentPage]);

    return (
        <>

            <div className='search_box table__box'>
                <input id='search' placeholder="search..." className="form-control"
                       onChange={e => searchData(e.target.value)}
                />
                <label htmlFor='search' className='search_icon search__btn'>
                    <AiOutlineSearch size='20px' color='white'/>
                </label>
            </div>

            <div className="table__box">


                {loading ? (
                    <Loader/>
                ) : (
                    <Table
                        rowKey="id"
                        columns={[
                            {
                                title: 'groupName',
                                dataIndex: 'name',
                            },

                            {
                                title: 'subject',
                                dataIndex: 'subject',
                                render: (item) => {
                                    return <div>{item.name}</div>;
                                },
                            },

                            {
                                title: 'Status',
                                dataIndex: 'status',
                                render: (item) => {
                                    return <span className="border py-1 px-2 border-success rounded">ACTIVE</span>;
                                },
                            },
                            {
                                title: (
                                    <span className="d-flex justify-content-end me-4">Action</span>
                                ),
                                render: (item) => {
                                    return (
                                        <div className="d-flex align-items-center justify-content-end gap-3">
                                            <button
                                                onClick={() => navigate(`/group/${item.id}`)}
                                                className="edit__btn"
                                            >
                                                <MdModeEdit/>
                                            </button>

                                            <Button
                                                variant="danger"
                                                onClick={() => setSelected(item.id)}
                                                title={<MdDelete size="25px"/>}
                                                className="delet__btn"
                                            />
                                        </div>
                                    );
                                },
                            },
                        ]}
                        dataSource={data}
                        pagination={false}
                        bordered
                    />
                )}

                <Pagination
                    pageSize={3}
                    className="my-3 d-flex justify-content-end"
                    current={currentPage+1}
                    total={totalCount}
                    onChange={(page) => setCurrentPage(page-1)}
                />

                <Modal
                    title="You want to delete this user"
                    open={selected}
                    onCancel={() => setSelected(null)}
                    footer={null}
                >
                    <div className="d-flex justify-content-end gap-4 mt-4">
                        <Button
                            title="cancel"
                            variant="neutral"
                            onClick={() => setSelected(null)}
                        />
                        <Button
                            title="delete"
                            variant="danger-delete"
                            onClick={() => hendelDelet(selected)}
                        />
                    </div>
                </Modal>

                <div>
                    <AddGroup/>
                </div>
            </div>
        </>
    );
}

export default Group;
