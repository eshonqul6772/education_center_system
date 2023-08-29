import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Table, Pagination } from "antd";
import { MdDelete, MdModeEdit } from "react-icons/md";


import Button from "components/Button/Button";
import subjectService from "services/subject.service";
import AddSubject from "./AddSubject";
import Loader from "components/Loader";
import "../Group/Group.scss";

import {AiOutlineSearch} from 'react-icons/ai';


function Subject() {
  const navigate = useNavigate("");
  
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const hendelDelet = (id) => {
    subjectService
        .remove(id)
        .then(() => {
          setSelected(null);
          setData();
        })
        .catch((err) => {
          console.log(err);
        });
  };
  
  
  const searchData = (name) => {
    setLoading(true)
    subjectService.getData(name, {
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
              <Loader />
          ) : (
              <Table
                  rowKey="id"
                  columns={[
                    {
                      title: "Name",
                      dataIndex: "name",
                    },
                    
                    {
                      title: "status",
                      dataIndex: "subject",
                      render: (item) => {
                        return <span className='border py-1 px-2 border-success rounded'>ACTIVE</span>;
                      },
                    },
                    {
                      title: (
                          <span className="d-flex justify-content-end me-4">
                    Action
                  </span>
                      ),
                      render: (item) => {
                        return (
                            <div className="d-flex align-items-center justify-content-end gap-3">
                              <button
                                  onClick={() => navigate(`/subject/${item.id}`)}
                                  className="edit__btn"
                              >
                                <MdModeEdit />
                              </button>
                              <Button
                                  onClick={() => setSelected(item.id)}
                                  variant="danger"
                                  title={<MdDelete size="25px" />}
                                  className="delet__btn"
                              />
                            </div>
                        );
                      },
                    },
                  ]}
                  dataSource={data}
                  pagination={false}
              />
          )}
          
          <Pagination
              className="my-3 d-flex justify-content-end"
              pageSize={4}
              current={currentPage + 1}
              total={totalCount}
              onChange={(page) => setCurrentPage(page - 1)}
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
            <AddSubject />
          </div>
        </div>
      </>
  );
}

export default Subject;
