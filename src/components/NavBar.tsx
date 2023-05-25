import { Link } from "react-router-dom";
import { useTypedSelector } from "store/store";

export default function NavBar() {
  const { user, isAuthenticated } = useTypedSelector(state => ({
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
  }));

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          {!isAuthenticated ? (
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Sign in
              </Link>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/logout" className="nav-link">
                  Logout
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/profile/${user && user.username}`} className="nav-link">
                  <img
                    style={{ height: "26px", borderRadius: "50px", float: "left", marginRight: "5px" }}
                    src={user && user.image ? user.image : "/placeholder.png"}
                  />
                  {user && user.username}
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
