import { Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Companies from "./components/Companies";
import Candidates from "./components/Candidates";
import Footer from "./components/Footer";
import "./styles/app.css";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { ApplicationProvider } from "./context";
import { useState, useEffect } from "react";
import SingleCandidate from "./components/SingleCandidate";

function App() {
  const [companies, setCompanies] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [previewCandidate, setPreviewCandidate] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [report, setReport] = useState([]);
  const getCandidates = async function () {
    const res = await fetch("http://localhost:3333/api/candidates");
    const data = await res.json();
    setCandidates(data);
  };
  console.log(candidates);
  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <ApplicationProvider
      value={{
        candidates,
        setCandidates,
        companies,
        setCompanies,
        previewCandidate,
        setPreviewCandidate,
        setSelectedCandidate,
        selectedCandidate,
        report,
        setReport,
      }}
    >
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/candidates" exact>
            {selectedCandidate ? <SingleCandidate /> : <Candidates />}
          </Route>
          <Route path="/companies" exact>
            <Companies />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </ApplicationProvider>
  );
}

export default App;
