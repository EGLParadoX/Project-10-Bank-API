import React from 'react';
import NavComponent from '../components/NavComponent';
import UserHeaderComponent from '../components/UserHeaderComponent';
import AccountComponent from '../components/AccountComponent';
import FooterComponent from '../components/FooterComponent';

const UserPage = () => (
  <div>
    <NavComponent />
    <main className="main bg-dark">
      <UserHeaderComponent userName="Tony Jarvis" />
      <AccountComponent accountType="Argent Bank Checking" accountNumber="8349" amount="2,082.79" description="Available Balance" />
      <AccountComponent accountType="Argent Bank Savings" accountNumber="6712" amount="10,928.42" description="Available Balance" />
      <AccountComponent accountType="Argent Bank Credit Card" accountNumber="8349" amount="184.30" description="Current Balance" />
    </main>
    <FooterComponent />
  </div>
);

export default UserPage;