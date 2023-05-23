import { useTypedSelector } from "store/store";

export default function NavBar() {
  const { user, isAuthenticated } = useTypedSelector(state => ({
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
  }));

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/#">
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <a className="nav-link" href="/#">
              Home
            </a>
          </li>
          {!isAuthenticated ? (
            <li className="nav-item">
              <a className="nav-link" href="/#/login">
                Sign in
              </a>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link" href="/#/logout">
                  Logout
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`#/profile/${user && user.username}`}>
                  <img
                    style={{ height: "26px", borderRadius: "50px", float: "left", marginRight: "5px" }}
                    src={user && user.image ? user.image : "/placeholder.png"}
                  />
                  {user && user.username}
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
