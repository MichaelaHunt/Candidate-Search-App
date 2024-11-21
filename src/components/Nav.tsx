import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/SavedCandidates"}>Potential Candidates</Link>
    </>
  )
};

export default Nav;
