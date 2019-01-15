import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">
          <i style={{ display: "inline" }} className="material-icons">
            add_to_photos
          </i>
          <span
            className="navSpan"
            style={
              window.innerWidth < 901
                ? { display: "none" }
                : { display: "inline" }
            }
          >
            New Blog Entry
          </span>
        </NavLink>
      </li>
      <li>
        <a href="/" onClick={props.signOut}>
          <i style={{ display: "inline" }} className="material-icons">
            exit_to_app
          </i>
          <span
            className="navSpan"
            style={
              window.innerWidth < 901
                ? { display: "none" }
                : { display: "inline" }
            }
          >
            Sign Out
          </span>
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating light-green lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
