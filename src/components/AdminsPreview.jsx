import React from "react";
import { vap } from "../VAP";
function AdminsPreview({ selectedAdmin }) {
  return (
    <div>
      return (
      <div className="card admin-card">
        <img src={vap[selectedAdmin].img} alt="admin" />
        <p>{vap[selectedAdmin].name}</p>
        <p>{vap[selectedAdmin].lastName}</p>
      </div>
      );
    </div>
  );
}

export default AdminsPreview;
