import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Table, Pagination } from "antd";
import { MdDelete, MdModeEdit } from "react-icons/md";

import Button from "components/Button/Button";
import subjectService from "services/subject.service";
import AddSubject from "./AddSubject";
import Loader from "components/Loader";
import "../Group/Group.scss";

function Subject() {
  const navigate = useNavigate("");

  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
    
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      subjectService
        .getData({
          page: currentPage,
          per_page: 7,
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

  const hendelDelet = (id) => {
    subjectService
      .remove(id)
      .then((res) => {
        setData(data.filter((element) => element.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
    handleCancel();
  };

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
                title: "Status",
                dataIndex: "status",
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
                        onClick={() => showModal(item.id)}
                        variant="danger"
                        title={<MdDelete size="25px" />}
                        className="delet__btn"
                      />
                      <Modal
                        footer={null}
                        title="You want to delete this user"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                      >
                        <div className="d-flex justify-content-end gap-4 mt-4">
                          <Button
                            title="cancel"
                            variant="neutral"
                            onClick={handleCancel}
                          />
                          <Button
                            title="delete"
                            variant="danger-delete"
                            onClick={() => hendelDelet(item.id)}
                          />
                        </div>
                      </Modal>
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
          current={currentPage + 1}
          total={totalCount}
          onChange={(page) => setCurrentPage(page - 1)}
        />

        <div>
          <AddSubject />
        </div>
      </div>
    </>
  );
}

export default Subject;
