import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";
const initializeAuth = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}
export default initializeAuth;