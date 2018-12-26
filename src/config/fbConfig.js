import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCiDCHOUDMtOxIQy3oRtYfiOapZeVuZLEs",
    authDomain: "net-ninja-mario-plan-ad7c1.firebaseapp.com",
    databaseURL: "https://net-ninja-mario-plan-ad7c1.firebaseio.com",
    projectId: "net-ninja-mario-plan-ad7c1",
    storageBucket: "net-ninja-mario-plan-ad7c1.appspot.com",
    messagingSenderId: "455264907979"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots : true});

  export default firebase;