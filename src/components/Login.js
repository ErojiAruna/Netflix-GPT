import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="absolute w-[450px] h-4/5 p-12 bg-black bg-opacity-75 my-24 mx-auto right-0 left-0 text-white rounded">
        <h1 className=" font-semibold text-3xl mb-7">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full rounded bg-zinc-800"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 w-full rounded bg-zinc-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full rounded bg-zinc-800"
        />
        <button className="bg-red-600 p-3 my-8 w-full rounded">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? 'New to Netflix? Sign Up Now'
            : 'Already registered? Sign In Now.'}
        </p>
      </form>
    </div>
  );
};

export default Login;
