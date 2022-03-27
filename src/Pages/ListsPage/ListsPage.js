import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import ContactLists from "./ContactLists/ContactLists";

const ListsPage = () => {
  return (
    <div>
      <Navbar />
      <ContactLists />
      <Footer />
    </div>
  );
};

export default ListsPage;
