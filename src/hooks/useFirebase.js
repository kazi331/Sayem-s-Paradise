import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../components/firebase.init";

const useFirebase = () => {
  const [userEmail, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState([]);
  const [confirmPass, setConfirmPass] = useState("");

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
        const user = result.user;
        setUser(user);
        console.log(user.email);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  // register with email and password
  const handleEmailRegister = (e) => {
    console.log(userEmail, pass, confirmPass);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userEmail, pass)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => console.log(error.message));
  };

  //   Email sign in
  const emailLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userEmail, pass)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user, userEmail, pass);
      })
      .catch((error) => console.log(error, userEmail, pass));
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
