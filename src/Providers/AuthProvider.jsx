import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // Social login providers
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  // Create user.
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // LoginUser
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login with Google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Login with Github
  const loginWithGithub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  // LogoutUser
  const logoutUser = () => {
    return signOut(auth);
  };

  const userInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logoutUser,
    loginWithGoogle,
    loginWithGithub,
  };

  // observation function here
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

      // Create accesstoken for login user.
      if (user) {
        const userEmail = { email: user.email };
        axiosPublic.post("/users/jwt", userEmail).then((res) => {
          if (res.data.token) {
            localStorage.setItem("accessToken", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("accessToken");
      }

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
