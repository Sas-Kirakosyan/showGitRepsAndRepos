import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Table from "../components/Table";
import Spiner from "../components/Spiner";

function Repositories() {
  const { loading, repoData, error } = useSelector(
    (state) => state.getRepoReducer
  );
  let filterRepo = repoData.filter((el) => el.owner.type === "User");
  let filterOrgs = repoData.filter((el) => el.owner.type === "Organization");

  // if (error) {
  //   return <h2 className="list-head">{error}</h2>;
  // }

  return (
    <div style={{ marginTop: 50 }}>
      <h2 className="list-head">Available Public Repositories</h2>
      {filterRepo.length > 0 && <h3 className="list-head">Type User</h3>}
      {filterOrgs.length > 0 && (
        <h3 className="list-head">Type Organization</h3>
      )}
      {loading ? <Spiner /> : <Table data={repoData} error={error} />}
    </div>
  );
}

export default Repositories;
