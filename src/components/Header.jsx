import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
// import { userService } from "../services/UserService";



export function _Header({loggedInUser}) {
  return (
    <section className="app-header">
      <nav>
        <ul>
          <li>
            <NavLink exact to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contacts"}>Contacts</NavLink>
          </li>
          <li>
            <NavLink to={"/statistics"}>Statistics</NavLink>
          </li>
          <li>
            <NavLink to={"/signup"}>Login</NavLink>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <h2>Mister Bitcoin</h2>
      </div>
      <div className="contact-info">
        <p>{loggedInUser.name}</p>
        <p>{loggedInUser.coins}</p>
      </div>
    </section>
  );
}


const mapStateToProps = (state) => {
  return {
    loggedInUser: state.userModule.loggedInUser,
  };
};

export const Header = connect(mapStateToProps)(_Header);