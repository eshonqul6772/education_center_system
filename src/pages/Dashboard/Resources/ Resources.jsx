import React from "react";
import { useNavigate } from "react-router-dom";

import ResourcesCard from "components/ResourcesCard/ResourcesCard";
import Button from "components/Button/Button";
import "./Resoursec.scss";

const Resources = () => {
  const navigate = useNavigate();

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="table__box">
      <div className="responsiveResoursec">
        <div className="row">
          {arr.map(() => {
            return <ResourcesCard />;
          })}
        </div>
      </div>
      <div className="d-flex justify-content-end">
          <Button
            title="Add"
            variant="primary"
            onClick={() => navigate("/resources/upload")}
          />
        </div>
    </div>
  );
};

export default Resources;
