import React from "react"
import { Link } from "react-router-dom"
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from "react-redux";
//import homeIcon from '../../assets/home_512.png';

const navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks/> ;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left"><i className="large material-icons">home</i><h2 style={window.innerWidth < 901 ? {display: 'none'} : {display: 'inline'}} >Blogosaurus</h2></Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(navbar);
