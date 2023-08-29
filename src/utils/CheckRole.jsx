import React from "react";

import useAuth from "reducers/hooks";

const CheckRole = ({ accessRoles, Page }) => {
  const { role } = useAuth();

  if (accessRoles.includes(role)) {
    return <>{Page}</>;
  }

  return null;
};

export default CheckRole;
