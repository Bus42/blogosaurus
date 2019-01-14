import React from "react";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="row">
      <div className="col s12 m8">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Team Communication</span>
            <p>
              Use this for secure, instant communication requiring
              authentication that will enable record-keeping of communications
              as well. This can be used from home, in the office, or wherever
              you are.
            </p>
          </div>
        </div>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Project Planning</span>
            <p>
              List topics and get feedback from collaborators on each topic to
              guide you while planning your next party, fundraiser, or company
              outing.
            </p>
          </div>
        </div>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Blogging!</span>
            <p>
              This app can easily be tailored to suit the purposes of any blog,
              even a community blog. I can make it searchable, add categories
              and custom filters, add the ability to upload images or embed
              videos - I can make it exactly what you need it to be for your
              blog, wedding page, band site, or whatever you need it to be.
            </p>
          </div>
        </div>
        <div className="card blue-grey darken-1">
          <div className="card-action">
            <p className="white-text">
              <NavLink className="waves-effect waves-light btn" to="/signUp">Sign up</NavLink> to get started or sign in below if you already have an account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
