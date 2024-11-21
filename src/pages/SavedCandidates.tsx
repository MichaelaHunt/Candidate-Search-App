import { useState } from "react";
import "./SavedCandidates.css";

const SavedCandidates = () => {
  let [candidates] = useState<Candidate[]>(getStorage);

  function getStorage(): Candidate[] {
    const data = localStorage.getItem('candidateList');
    let storage: Candidate[] = JSON.parse(data!);
    return storage;
  }

  return (
    <>
      <h1>Potential Candidates</h1>
      {candidates && (
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
            {candidates.map((item) => (
              <tr key={item.html_url}>
                <td><img src={item.avatar_url ? item.avatar_url : "Not found."}></img></td>
                <td>{item.name} ({item.login})</td>
                <td>{item.location ? item.location : "Not found."}</td>
                <td>{item.email ? item.email : "Not found."}</td>
                <td>{item.company ? item.company : "Not found."}</td>
                <td>{item.bio ? item.bio : "Not found."}</td>
                <td><button>-</button></td>
              </tr>
            ))}
          </thead>
          <tbody>
            {/* You can render table rows here */}
          </tbody>
        </table>
      )}
    </>
  );

};

export default SavedCandidates;
