import React from 'react';

const Signup = () => {
  return (
    <div className="font-bold">
      <h1>Unlimited movies, TV shows and more</h1>
      <p>watch anywhere. Cancel anytime.</p>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div>
        <input type="text" placeholder="Email address" />
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Signup;
