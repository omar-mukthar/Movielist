import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 

    <nav>
      <h1>Netflix</h1>
      <div className="links">
        <Link to="/" >Home</Link>
        <Link to="/Create">Add new movie</Link>
        
     </div>
     </nav>




     );
}
 
export default Navbar;



