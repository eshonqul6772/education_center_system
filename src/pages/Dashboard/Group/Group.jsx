import { useEffect, useState } from "react";
import { Modal, Pagination, Table } from "antd";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import "./Group.scss";
import GetGroupServices from "services/group.service";
import Button from "components/Button";
import AddGroup from "./AddGroup";
import Loader from "components/Loader";

function Group() {
  const navigate = useNavigate("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    GetGroupServices.remove(id)
      .then((res) => {
        setData(data.filter((element) => element.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
    handleCancel();
  };

  useEffect(() => {
    setTimeout(() => {
      GetGroupServices.getAll()
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      GetGroupServices.getData({
        page: currentPage,
        per_page: 7,
        sort: {
          name: "id",
          direction: "asc",
        },
      })
        .then((res) => {
          setData(res.data.data);
          GetGroupServices(res.data.totalCount);
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
                title: "groupName",
                dataIndex: "groupName",
              },
              {
                title: "subjectName",
                dataIndex: "subjectName",
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
                      onClick={() => navigate(`/group/${item.id}`)}
                      className="edit__btn"
                    >
                      <MdModeEdit />
                    </button>
                    
                    <Button
                      variant="danger"
                      title={<MdDelete size="25px" />}
                      onClick={showModal}
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
          className="my-3 d-flex justify-content-end"
          current={currentPage + 1}
          total={totalCount}
          onChange={(page) => setCurrentPage(page - 1)}
        />

        <Modal
          footer={null}
          title="You want to delete this user"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="d-flex justify-content-end gap-4 mt-4">
            <Button title="cancel" variant="neutral" onClick={handleCancel} />
            <Button
              title="delete"
              variant="danger-delete"
              onClick={() => hendelDelet()}
            />
          </div>
        </Modal>

        <div>
          <AddGroup />
        </div>
      </div>
    </>
  );
}

export default Group;
