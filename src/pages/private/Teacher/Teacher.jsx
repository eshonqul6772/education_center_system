import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdModeEdit } from "react-icons/md";
import {AiOutlineSearch} from 'react-icons/ai';
import { Modal, Table, Pagination } from "antd";

import getTeamService from "services/teacher.service";
import Button from "components/Button";
import AddTeacher from "./AddTeacher";
import Loader from 'components/Loader';

function Teacher() {
  const navigate = useNavigate("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [selected, setSelected] = useState(null);
  const [loader , setLoader] = useState(true)

  const hendelDelet = (id) => {
      getTeamService
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
        setLoader(true)
        getTeamService.getAll(name, {
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
        setLoader(false)
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

          {
              loader ? <Loader/> :
                  <Table
                      rowKey="id"
                      columns={[
                          {
                              title: "first_name",
                              dataIndex: "firstName",
                          },
                          {
                              title: "last_name",
                              dataIndex: "lastName",
                          },

                          {
                              title: "subject",
                              dataIndex: "subjects",
                              render: (item) => {
                                  return item.map((subject) => (
                                      <span key={subject.id}>{subject.name}</span>
                                  ));
                              },
                          },

                          {
                              title: "status",
                              dataIndex: "status",
                              render: (item) => {
                                  return <span className='border py-1 px-2 border-success rounded'>ACTIVE</span>;
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
                                              onClick={() => navigate(`/teacher/${item.id}`)}
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
          }

        <Pagination
          className="my-3 d-flex justify-content-end"
          pageSize={2}
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

        <AddTeacher />
      </div>
    </>
  );
}

export default Teacher;
