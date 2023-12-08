import React from "react";
import { useEffect, useState, useContext } from "react";
import { appContext } from "../context";

function Companies() {
  const { companies, setCompanies } = useContext(appContext);
  const [selectedId, setSelectedId] = useState(null);
  const getCompanies = async function () {
    const res = await fetch("http://localhost:3333/api/companies");
    const data = await res.json();
    setCompanies(data);
  };
  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <div className="container companies">
      {companies.map((company) => {
        return (
          <Company
            img={company.url}
            about={company.about}
            id={company.id}
            key={company.id}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        );
      })}
    </div>
  );
}

function Company({ img, about, id, selectedId, setSelectedId }) {
  const handleClick = function (id) {
    setSelectedId(id !== selectedId ? id : null);
  };
  return (
    <div className="company" onClick={() => handleClick(id)}>
      {selectedId === id ? (
        <p className="aboutus-text">{about}</p>
      ) : (
        <img src={img} alt=""></img>
      )}
    </div>
  );
}

export default Companies;
