import React, { useContext } from "react";
import { appContext } from "../context";
import { slike } from "../slike";
import { useNavigate } from "react-router-dom";

function Candidates() {
  const { candidates } = useContext(appContext);

  return (
    <div className="container candidates">
      {candidates.map((candidate) => {
        return (
          <Card
            name={candidate.name}
            email={candidate.email}
            img={candidate.avatar}
            key={candidate.id}
            candidate={candidate}
          />
        );
      })}
    </div>
  );
}

export function Card({ name, email, candidate }) {
  const imgTag = slike[Math.floor(Math.random() * 9)];
  const navigate = useNavigate();
  const { setSelectedCandidate } = useContext(appContext);

  return (
    <>
      <div
        className="card"
        onClick={() => {
          setSelectedCandidate(candidate);
          navigate("/selectedCandidate");
        }}
      >
        <img
          src={
            process.env.PUBLIC_URL + `${candidate.image || candidate.avatar}`
          }
          alt=""
        />
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </>
  );
}

export default Candidates;
