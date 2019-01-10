import React from 'react'

const Footer = () => {
    return ( <footer className="page-footer light-green darken-3">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Blogosaurus</h5>
          <p className="grey-text text-lighten-4">Many thanks to <a href="https://www.thenetninja.co.uk">The Net Ninja</a> for his great tutorials. Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>. Licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="flaticon">CC 3.0</a> </p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Built With</h5>
          <ul>
            <li><a className="grey-text text-lighten-3" href="https://reactjs.org/" target="react">React</a></li>
            <li><a className="grey-text text-lighten-3" href="https://firebase.google.com/" target="firebase">Firebase</a></li>
            <li><a className="grey-text text-lighten-3" href="https://redux.js.org/" target="redux">Redux</a></li>
            <li><a className="grey-text text-lighten-3" href="https://materializecss.com/" target="materialize">Materialize</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © 2019
      <a className="grey-text text-lighten-4 right" href="https://portfolio.studio42dev.com">Studio42 Dev</a>
      </div>
    </div>
  </footer> );
}
 
export default Footer;