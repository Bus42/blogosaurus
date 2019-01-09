import React from 'react'

const Footer = () => {
    return ( <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Hey, it's a footer!</h5>
          <p class="grey-text text-lighten-4">Many, many thanks to <a href="https://www.thenetninja.co.uk">The Net Ninja</a> for his great tutorials. Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="flaticon">CC 3.0 BY</a> </p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Built With</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="https://reactjs.org/" target="react">React</a></li>
            <li><a class="grey-text text-lighten-3" href="https://firebase.google.com/" target="firebase">Firebase</a></li>
            <li><a class="grey-text text-lighten-3" href="https://redux.js.org/" target="redux">Redux</a></li>
            <li><a class="grey-text text-lighten-3" href="https://materializecss.com/" target="materialize">Materialize</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      © 2014 Copyright Text
      <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
  </footer> );
}
 
export default Footer;