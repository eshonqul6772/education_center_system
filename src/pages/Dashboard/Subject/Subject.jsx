import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Table, Pagination } from "antd";
import { MdDelete, MdModeEdit } from "react-icons/md";

import Button from "components/Button/Button";
import subjectService from "services/subject.service";
import AddSubject from "./AddSubject";
import Loader from "components/Loader";
import "../Group/Group.scss";
import Search from "components/Search/Search";

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


  useEffect(() => {
    setTimeout(() => {
      subjectService
        .getData({
          page: currentPage,
          per_page: 4,
          sort: {
            name: "id",
            direction: "asc",
          },
        })
        .then((res) => {
          setData(res.data.data);
          setTotalCount(res.data.totalCount);
        })
        .catch((err) => {
          console.log(err);
        }, 1000);
      setLoading(false);
    });
  }, [currentPage]);


  return (
    <>
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
