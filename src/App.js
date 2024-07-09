import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ReferralBenefits from './components/ReferralBenefits';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import MiddleSection from './components/MiddleSection';


function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Navbar />
      <MiddleSection />
      <Header openModal={openModal}/>
      <Hero  />
      <ReferralBenefits openModal={openModal} />
      <FAQ />
      <Contact />
      <Footer />
      {showModal && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default App;
