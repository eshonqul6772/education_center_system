import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Modal, Pagination, Table } from "antd";

import getStudentsService from "services/student.service";
import Button from "components/Button";
import AddStudent from "./AddStudent";
import Loader from "components/Loader";
import "./Student.scss";
import {AiOutlineSearch} from 'react-icons/ai';


function Student() {
  const navigate = useNavigate();
  const [data, setStudent] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [selected, setSelected] = useState(null);
  const [loader, setLoader] = useState(true);


  const hendelDelet = (id) => {
    getStudentsService
      .remove(id)
      .then(() => {
        setSelected(null);
        setStudent();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchData = (name) => {
    setLoader(true)
    getStudentsService.getAll(name, {
      page: currentPage,
      per_page: 3,
      sort: {
        name: 'id',
        direction: 'desc',
      },
    }).then((res) => {
      setTotalCount(res.data.totalCount);
      setStudent(res.data.data);
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
        <label htmlFor='search' className='search_icon'>
          <button className='search__btn'><AiOutlineSearch size='20px' color='white'/></button>
        </label>
      </div>

      <div className="table__box">
        {loader ? (
          <Loader />
        ) : (
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
                title: "phone_number",
                dataIndex: "phone",
              },

              {
                title: "status",
                dataIndex:"status",
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
                        onClick={() => navigate(`/student/${item.id}`)}
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

        <AddStudent />
      </div>
    </>
  );
}

export default Student;
