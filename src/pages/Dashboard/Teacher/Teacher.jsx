import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Modal, Table, Pagination } from "antd";

import getTeamService from "../../../services/teacher.service";
import Button from "../../../components/Button";
import AddTeacher from "./AddTeacher";

function Teacher() {
  const navigate = useNavigate("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [selected, setSelected] = useState(null);

  const hendelDelet = (id) => {
    getTeamService
      .remove(id)
      .then(() => {
        setSelected(null);
        getList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getList = () => {
    getTeamService
      .getAll({
        page: currentPage,
          per_page: 4,
          sort: {
            name: "id",
            direction: "asc",
          },
      })
      .then((res) => {
        setData(res.data.content);
        setTotalCount(res.data.totalCount);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <div className="table__box">
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
