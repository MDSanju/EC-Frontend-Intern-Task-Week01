import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import ContactForm from "./ContactForm/ContactForm";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
