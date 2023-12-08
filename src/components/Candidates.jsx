import React, { useContext } from "react";
import { appContext } from "../context";
import { slike } from "../slike";

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

function Card({ name, email, candidate }) {
  const { setSelectedCandidate } = useContext(appContext);

  const imgTag = slike[Math.floor(Math.random() * 9)];
  return (
    <div className="card" onClick={() => setSelectedCandidate(candidate)}>
      <img src={imgTag} alt="" />
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
}

export default Candidates;
