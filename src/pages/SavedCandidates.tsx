import { useState } from "react";
import "./SavedCandidates.css";

const SavedCandidates = () => {
  let [candidates, setCandidates] = useState<Candidate[]>(getStorage);

  function getStorage(): Candidate[] {
    const data = localStorage.getItem('candidateList');
    let storage: Candidate[] = JSON.parse(data!);
    return storage;
  }

  function removeItem(item: Candidate) {
    let storage = getStorage();
    let index = storage.findIndex((candidate) => candidate.html_url === item.html_url);
    storage.splice(index, 1);
    setCandidates(storage);
    localStorage.setItem('candidateList', JSON.stringify(storage));
  }

  return (
    <>
      <h1>Potential Candidates</h1>
      {candidates && candidates.length > 0 ? (
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
          </thead>
          {candidates.map((item) => (
            <tbody key={item.html_url}>
              <tr>
                <td><img src={item.avatar_url ? item.avatar_url : "Not found."}></img></td>
                <td>{item.name} (<a href={item.html_url!}>{item.login}</a>)</td>
                <td>{item.location ? item.location : "Not found."}</td>
                <td>{item.email ? item.email : "Not found."}</td>
                <td>{item.company ? item.company : "Not found."}</td>
                <td>{item.bio ? item.bio : "Not found."}</td>
                <td><button onClick={() => removeItem(item)}>-</button></td>
              </tr>
            </tbody>
          ))}
        </table>
      ) : (
        <div>
          <h2>No candidates to display. Visit the home page!</h2>
        </div>
      )}
    </>
  );

};

export default SavedCandidates;
