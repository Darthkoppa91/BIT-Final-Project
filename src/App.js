import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Companies from "./components/Companies";
import Candidates from "./components/Candidates";
import Footer from "./components/Footer";
import "./styles/app.css";
import { fetchData } from "./helpers";
import { ApplicationProvider } from "./context";
import { useState, useEffect } from "react";
import SingleCandidate from "./components/SingleCandidate";
import Login from "./components/Modal";
import AdminPage from "./components/AdminPage";
import { PrivateRoutes } from "./ProtectedRoutes";
import Overlay from "./components/wizzard/Overlay";

function App() {
  const [companies, setCompanies] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [previewCandidate, setPreviewCandidate] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [report, setReport] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(
    JSON.parse(localStorage.getItem("accessToken"))
  );
  const [showOverlay, setShowOverlay] = useState(false);
  const [createReport, setCreateReport] = useState({
    candidateId: "",
    candidateName: "",
    companyId: "",
    companyName: "",
    interviewDate: "",
    note: "",
    phase: "",
    status: "",
  });

  console.log(candidates);

  useEffect(() => {
    fetchData(setCandidates, "candidates");
    fetchData(setCompanies, "companies");
    accessToken ? setIsLoggedIn(true) : setIsLoggedIn(false);
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
        accessToken,
        setAccessToken,
        setOpenModal,
        setIsLoggedIn,
        isLoggedIn,
        setShowOverlay,
        createReport,
        setCreateReport,
      }}
    >
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/selectedCandidate" element={<SingleCandidate />} />
          <Route path="/companies" element={<Companies />} />

          {/* <Redirect to="/" /> */}
          <Route element={<PrivateRoutes />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
        {openModal ? <Login /> : null}
        <Footer />
        {showOverlay ? <Overlay /> : null}
      </div>
    </ApplicationProvider>
  );
}

export default App;
