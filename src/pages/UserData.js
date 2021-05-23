import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import ImgMediaCard from "../components/ImgMediaCard";
import Spiner from "../components/Spiner";

function UserData() {
  const { loading, userData, error } = useSelector(
    (state) => state.getUserReducer
  );

  return (
    <div style={{ marginTop: 50 }}>
      <h2 className="list-head">User Data</h2>
      {loading ? <Spiner /> : <ImgMediaCard data={userData} error={error} />}
    </div>
  );
}

export default UserData;
