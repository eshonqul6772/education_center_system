import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Modal, Pagination, Table } from "antd";

import getStudentsServisec from "services/student.service";
import Button from "components/Button";
import AddStudent from "./AddStudent";
import "./Student.scss";

function Student() {
    const navigate = useNavigate()
  const [data, setStudent] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getStudentsServisec
      .getAll({
        page: currentPage,
        per_page: 2,
        sort: {
          name: "id",
          direction: "asc",
        },
      })
      .then((res) => {
        setStudent(res.data.content);
        setTotalCount(res.data.totalCount);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

  const hendelDelet = (id) => {
    getStudentsServisec
      .remove(id)
      .then(() => {
        setSelected(null);
        setStudent();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                title: "phone_number",
                dataIndex: "phone",
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

        <AddStudent />
      </div>
    </>
  );
}

export default Student;
