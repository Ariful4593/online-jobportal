import firebase from "firebase/app";
const captchaVerifier = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container", {
        size: "invisible",
        callback: function (response) {
        },
        defaultCountry: "IN",
    }
    );
}
export default captchaVerifier;