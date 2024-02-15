import React from 'react';
import NavComponent from '../components/NavComponent';
import SignInFormComponent from '../components/SigninFormComponent';
import FooterComponent from '../components/FooterComponent';


const SignInPage = () => (
  <div>
    <NavComponent />
    <main className="main bg-dark">
      <SignInFormComponent />
    </main>
    <FooterComponent />
  </div>
);

export default SignInPage;