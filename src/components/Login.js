import React, { useState } from 'react';
import './Login.css'
import { auth } from '../setup/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function Login() {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[name, setName] = useState("");
    const[profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //Signed in
            const user = userCredential.user;
            // ...
            dispatch(
                login({
                email: user.email,
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
            }))
        }).catch(err => alert(err));
    }

    const register = async () => {
        if(!name){
            return alert("Please enter your name!")
        }
        try {
            // create a new user
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update the user's profile
              updateProfile(user, {
                displayName: name,
                photoURL: profilePic,
            });
            // Dispatch the registration action
            dispatch(
                login({
                    email: user.email,
                    uid: user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                })
            );
        } catch(error) {
            alert(error.message);
        }
    }

  return (
    <div className='login'>
        <img alt='logo' src='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg'/>

        <form>
            <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Full Name(required only for registering)'/>
            <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type='text' placeholder='Profile pic URL (optional)' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password'/>
            <input value={email} onChange={(e) => setEmail(e.target.value)}  type='email' placeholder='Email'/>
            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>
        <p>Not a member?{" "}
            <span className='login_register' onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login