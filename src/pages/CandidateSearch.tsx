import { useState} from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import "./CandidateSearch.css";



const CandidateSearch = () => {
const [candidate, setCandidate] = useState<Candidate>({
  login: "octocat",
  avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  html_url: "https://github.com/octocat",
  location: null,
  email: null,
  bio: null,
  name: null,
  company: null
});


async function nextCandidate() {
  //searchGithub
  //then searchGithubUser (to get the full info)
  //destructure into Candidate obj
  const data: any = await searchGithub();
  // console.log("Data: " + JSON.stringify(data));
  const finalData: any = await searchGithubUser(data[0].login);
  console.log("FinalData: " + JSON.stringify(finalData));
  const myCandidate: Candidate = finalData;
  console.log("Candidate: " + JSON.stringify(myCandidate));
  setCandidate(myCandidate);
}

// function saveCandidate() {
//   //save the candidate to local storage
// }

  return (
    <>
      <h1>CandidateSearch</h1>
      <section>
        <div className="container">
          {/* avatar_url below */}
          <img src={candidate.avatar_url ? candidate.avatar_url : ""}></img>
          <div className="textBox">
            <h2>{candidate.name} ({candidate.login})</h2>
            <h4>Location: {candidate.location ? candidate.location : "Not found."}</h4>
            <h4>Email: {candidate.email ? candidate.email : "Not found."}</h4>
            <h4>Company: {candidate.company ? candidate.company : "Not found."}</h4>
            <h4>Bio: {candidate.bio ? candidate.bio : "Not found."}</h4>
          </div>
        </div>
        <div className="buttons">
            <button className="circle red" onClick={nextCandidate}>
              <p>-</p>
            </button>
            <button className="circle green">
              <p>+</p>
            </button>
        </div>
      </section>
    </>
  );
};

export default CandidateSearch;
