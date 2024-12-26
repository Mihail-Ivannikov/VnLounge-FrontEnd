import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Login: React.FC = () => {
  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
};

export default Login;
