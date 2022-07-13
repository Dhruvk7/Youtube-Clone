import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDdYhu17eiptpt7gnIwHSDBPiC24dy_lbQ",
    authDomain: "ytclone77.firebaseapp.com",
    projectId: "ytclone77",
    storageBucket: "ytclone77.appspot.com",
    messagingSenderId: "524528214027",
    appId: "1:524528214027:web:d4b091366f44065ed3a70e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();