import { useEffect, useState } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import "./CandidateSearch.css";

const CandidateSearch = () => {

  useEffect(() => {
    nextCandidate();
  }, []);

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
    const data: any = await searchGithub();
    const finalData: any = await searchGithubUser(data[0].login);
    const myCandidate: Candidate = finalData;
    
    setCandidate(myCandidate);
  }

  function saveCandidate() {
    let storage = (localStorage.getItem('candidateList'));//get storage
    if (storage) {//Storage has contents already
      let myArray = JSON.parse(storage);//parse
      if (isAlreadyInStorage(myArray)) {//checking to see if it already exists in storage
        alert("Item already added.");
      } else {
        localStorage.setItem('candidateList', JSON.stringify([...myArray, candidate]));
      }
    } else {//storage has no contents yet
      localStorage.setItem('candidateList', JSON.stringify([candidate]));
    }
  }

  function isAlreadyInStorage(storage: Candidate[]): boolean {
    return storage.some(item => item.html_url === candidate.html_url);//.some() was recommended by ChatGPT
  }
  
  return (
    <>
      <h1>CandidateSearch</h1>
      <section>
        <div className="container">
          <img src={candidate.avatar_url ? candidate.avatar_url : ""}></img>
          <div className="textBox">
            <h2>{candidate.name} ({candidate.login})</h2>
            <h4>Location: {candidate.location ? candidate.location : "Info not found."}</h4>
            <h4>Email: {candidate.email ? candidate.email : "Info not found."}</h4>
            <h4>Company: {candidate.company ? candidate.company : "Info not found."}</h4>
            <h4>Bio: {candidate.bio ? candidate.bio : "Info not found."}</h4>
          </div>
        </div>
        <div className="buttons">
          <button className="circle red" onClick={nextCandidate}>
            <p>-</p>
          </button>
          <button className="circle green" onClick={saveCandidate}>
            <p>+</p>
          </button>
        </div>
      </section>
    </>
  );
};

export default CandidateSearch;
