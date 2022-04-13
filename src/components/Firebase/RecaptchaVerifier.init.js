import firebase from "firebase/app";
const captchaVerifier = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container", {
        size: "invisible",
        callback: function (response) {
            // console.log("Captcha Resolved");
        },
        defaultCountry: "IN",
    }
    );
}
export default captchaVerifier;