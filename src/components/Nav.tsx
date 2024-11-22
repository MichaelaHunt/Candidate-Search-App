import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <Link style={{marginLeft: '25%', marginRight: '16px', color: 'white'}} to={"/"}>Home</Link>
      <Link style={{color: 'white'}} to={"/SavedCandidates"}>Potential Candidates</Link>
    </>
  )
};

export default Nav;
