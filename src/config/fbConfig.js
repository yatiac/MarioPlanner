import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyASn-VJnp5yaYF4c_YZJjRgCSlPa9-rZro",
    authDomain: "mario-plan-5812b.firebaseapp.com",
    databaseURL: "https://mario-plan-5812b.firebaseio.com",
    projectId: "mario-plan-5812b",
    storageBucket: "mario-plan-5812b.appspot.com",
    messagingSenderId: "110439926117",
    appId: "1:110439926117:web:e94656768cc9abd9d7b98c"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;