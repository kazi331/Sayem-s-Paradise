import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../components/firebase.init";

const useFirebase = () => {
  const [userEmail, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState([]);
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [sendEmailVerification] = useSendEmailVerification(auth);

  const grabEmail = (e) => {
    setEmail(e.target.value);
  };
  const grabPass = (e) => {
    setPass(e.target.value);
  };
  const grabConfirmPass = (e) => {
    setConfirmPass(e.target.value);
  };
  // google sign in
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const googleLogin = (from) => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        toast("Wait...");
        const user = result.user;
        setUser(user);
        console.log(user.email);
        navigate(from, { replace: true });
      })
      .catch((error) => toast(error));
  };
  // register with email and password
  const handleEmailRegister = (e) => {
    e.preventDefault();
    if (!userEmail) return toast("Please Enter an email");
    if (!pass) return toast("Please Enter password.");
    if (pass !== confirmPass) return toast("Password does't match.");
    createUserWithEmailAndPassword(auth, userEmail, pass)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast("Verification email sent. ");
      })
      .catch((error) => toast(error.message));
  };

  //   Email sign in
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const emailLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, userEmail, pass);
    if (!userEmail)
      return toast("Enter valid email and pass")
        .then((result) => {
          const user = result.user;
          setUser(user);
          console.log(user, userEmail, pass);
          navigate(from, { replace: true });
          sendEmailVerification(userEmail);
          toast(user.email, "Successfully logged in. ");
        })
        .catch((error) => {
          setError(error);
          toast(error.message);
        });
  };

  //   observe current logged in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, []);

  // logout
  const logOut = () => {
    signOut(auth)
      .then(() => console.log("signOut successfull"))
      .catch((error) => console.log(error));
  };

  return {
    userEmail,
    pass,
    confirmPass,
    user,
    error,
    setUser,
    handleEmailRegister,
    grabEmail,
    grabPass,
    grabConfirmPass,
    googleLogin,
    emailLogin,
    logOut,
  };
};

export default useFirebase;
