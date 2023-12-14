export const getData = async function (
  token,
  object,
  endpoint,
  state1,
  state2
) {
  const res = await fetch(`http://localhost:3333/api/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(object),
  });
  const data = await res.json();
  state1(false);
  state2((prev) => [...prev, object]);
};

export const fetchData = async function (cbf, endpoint) {
  const res = await fetch(`http://localhost:3333/api/${endpoint}`);
  const data = await res.json();
  cbf(data);
};

export const deleteReport = async function (id, token, state1) {
  const res = await fetch(`http://localhost:3333/api/reports/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  // const deletedCandidate = await res.json();
  state1((prev) => prev.filter((report) => report.id !== id));
};
