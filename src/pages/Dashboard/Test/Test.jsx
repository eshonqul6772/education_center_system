import React, { useEffect, useState } from "react";
import { Table, Pagination } from "antd";

import subjectService from "services/subject.service";

const Test = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
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
      });
  }, [currentPage]);

  return (
    <>
      <Table
        rowKey="id"
        columns={[
          {
            title: "Id",
            dataIndex: "id",
          },
          {
            title: "Name",
            dataIndex: "name",
          },
          {
            title: "Status",
            dataIndex: "status",
          },
          {
            title: "Action",
            render: (item) => {
              return (
                <div>
                  <div onClick={() => console.log(item.id)}>Edit</div>
                  <div>Delete</div>
                </div>
              );
            },
          },
        ]}
        dataSource={data}
        pagination={false}
       
      />

      <Pagination
        current={currentPage + 1}
        total={totalCount}
        onChange={(page) => setCurrentPage(page - 1)}
      />
    </>
  );
};

export default Test;
