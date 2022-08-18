import { useLocation, useNavigate } from "react-router";
import Link from "react-scroll/modules/components/Link";




const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const Routing = () =>{
    navigate('/read')
  }
  const RoutingWatch = () =>{
    navigate('/watch')
  }

  return (
    <nav className="navbar">
      <div className="content">
        <h4 className={location.pathname === '/watch' ? 'active' : ''} onClick={RoutingWatch} >Watch</h4>
     <h4 className={location.pathname === '/read' ? 'active' : ''} onClick={Routing} >Read</h4>
        <h4>Shop</h4>
      </div>
    </nav>
  );
};

export default Navbar;
