import React, { useState } from 'react';
import "./LoginScreen.css"
import SignupScreen from './SignupScreen';

function LoginScreen() {
    const [singIn, setSignIn] = useState(false);



  return (
  <div className='loginScreen'>
      <div className='loginScreen__background'>
        <img className='loginScreen__logo' 
        src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='img' />
        <button 
        onClick={() => setSignIn(true)}
        className='loginScreen__button'>Sing In</button>

        <div className='loginScreen__gradient'></div>
        <div className='loginScreen__body'>
            {singIn ? (
                <SignupScreen />
            ): 
            <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? enter your email to create or restart your membership</h3>

                <div className='loginScreen__input'>
                    <form>
                        <input type='email' placeholder='Email Address' />
                        <button className='loginScreen__getStarted'
                        onClick={() => setSignIn(true)}
                        >GET STARTED</button>
                    </form>
                </div>
            </>
            }
        </div>
      </div>
  </div>
  );
}

export default LoginScreen;
