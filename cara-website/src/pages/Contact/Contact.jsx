import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import bGI from "../../../public/banner.png";
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactDetails from "../../components/ContactDetails/ContactDetails";

const Contact = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        h2="#let's_talk"
        p="LEAVE A MESSAGE, We love to hear from you!"
        bGI={bGI}
      />
      <ContactDetails />
    </>
  );
};

export default Contact;
