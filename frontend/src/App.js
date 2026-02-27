import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState("");

  const [role, setRole] = useState("");
  const [query, setQuery] = useState("");

  const [status, setStatus] = useState("Applied");

  const fetchJobs = async () => {

    const res = await fetch("http://127.0.0.1:5000/jobs");

    const data = await res.json();

    setJobs(data);
  };


  const addJob = async () => {

    await fetch("http://127.0.0.1:5000/jobs", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        company,

        role,

        status
      })
    });

    fetchJobs();
    setCompany("");
    setRole("");
    setStatus("Applied");
  };

  const deleteJob = async (id) => {
    await fetch(`http://127.0.0.1:5000/jobs/${id}`, { method: "DELETE" });
    fetchJobs();
  };

  const normalizedQuery = query.trim().toLowerCase();
  const visibleJobs = normalizedQuery
    ? jobs.filter((job) => {
        const haystack = `${job.company ?? ""} ${job.role ?? ""} ${job.status ?? ""}`.toLowerCase();
        return haystack.includes(normalizedQuery);
      })
    : jobs;

  useEffect(() => {

    fetchJobs();

  }, []);


  return (

    <div className="page">
      <header className="header">
        <div className="appName">trackIt</div>
        <h1 className="title">Let&apos;s track your progress!</h1>
      </header>

      <div className="controls">
        <input
          type="search"
          value={query}
          placeholder="Search jobs"
          onChange={(e) => setQuery(e.target.value)}
        />

        {normalizedQuery ? (
          <button className="secondaryBtn" onClick={() => setQuery("")}>
            Clear
          </button>
        ) : null}

        <input
          value={company}
          placeholder="Company"
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          value={role}
          placeholder="Role"
          onChange={(e) => setRole(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Rejected">Rejected</option>
          <option value="Offer">Offer</option>
        </select>

        <button onClick={addJob}>Add Job</button>
      </div>

      <div className="jobBox">
        <div className="jobMeta">
          {normalizedQuery ? (
            <div className="jobCount">
              Showing {visibleJobs.length} of {jobs.length}
            </div>
          ) : (
            <div className="jobCount">{jobs.length} jobs</div>
          )}
        </div>

        {visibleJobs.length === 0 ? (
          <div className="empty">No matching jobs yet.</div>
        ) : (
          visibleJobs.map((job) => (
            <div className="jobItem" key={job.id}>
              <div className="jobMain">
                <div className="jobCompany">{job.company}</div>
                <div className="jobRole">{job.role}</div>
              </div>
              <div className="jobRight">
                <div className="status">{job.status}</div>
                <button className="deleteBtn" onClick={() => deleteJob(job.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default App;