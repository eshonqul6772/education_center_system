import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination, Table } from "antd";
import { MdModeEdit, MdDelete } from "react-icons/md";

import getUploadFile from "services/resources.service";
import ResourcesCard from "components/ResourcesCard";
import Button from "components/Button/Button";
import "./Resoursec.scss";

const Resources = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect((name) => {
    getUploadFile
      .getFile(name,{
        per_page: 15,
        page: currentPage,
        sort: {
          name: "id",
          direction: "desc",
        },
      })
      .then((res) => {
        setTotalCount(res.data.totalCount);
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  return (
    <div className="table__box">
        <Table
          rowKey="id"
          columns={[
            {
              title: "name",
              dataIndex: "name",
            },

            {
              title: "contentType",
              dataIndex: "contentType",
            },
          ]}

          onRow={(record , rowKey) => {
            return {
              onClick: event => {
                navigate(`/resources/${record.hashId}`)
              }
            }
          }}
          dataSource={data}
          pagination={false}
          bordered
        />

        <div className="d-flex justify-content-end">
          <Button
            title="Add"
            variant="primary"
            onClick={() => navigate("/resources/upload")}
          />
        </div>


      <Pagination
        pageSize={15}
        className="my-3 d-flex justify-content-end"
        current={currentPage + 1}
        total={totalCount}
        onChange={(page) => setCurrentPage(page - 1)}
      />
    </div>
  );
};

export default Resources;
