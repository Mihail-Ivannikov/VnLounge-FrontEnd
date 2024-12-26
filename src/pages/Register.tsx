import React from 'react';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Register: React.FC = () => {
  return (
    <>
      <Header />
      <RegistrationForm />
      <Footer />
    </>
  );
};

export default Register;
