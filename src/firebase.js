import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAQXeqAShL2nGYPvNfD4F4Z-gS4H3Nqmag",
    authDomain: "online-jobplace.firebaseapp.com",
    projectId: "online-jobplace",
    storageBucket: "online-jobplace.appspot.com",
    messagingSenderId: "48147710375",
    appId: "1:48147710375:web:13651ac63a8a0e00d0b682",
    measurementId: "G-1VRTZZHGCT"
};

firebase.initializeApp(firebaseConfig);

export default firebase;