import React, {useRef} from 'react';
import { auth } from "../firebase"
import './SingupScreen.css';

function SignupScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    
    const register = (e) => {
        e.preventDefault();
        console.log(auth)
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message)
        });
    }
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message)
        })
    }


  return (
  <div className='singupScreen'>
      <form>
          <h1>Sing In</h1>
          <input ref={emailRef} placeholder='Email' type='email' />
          <input ref={passwordRef} placeholder='Password' type='password' />
          <button type='submit'
            onClick={signIn}
            >Sing In
          </button>
          <h4>
              <span className='signupScreen__gray'
              >New to Netflix?</span>
               <span className='singupScreen__link'
               onClick={register}>
                Sing Up now.</span>
               </h4>
      </form>
  </div>
  );
}

export default SignupScreen;
