import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import bGI from "../../../public/banner.png";
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactDetails from "../../components/ContactDetails/ContactDetails";
import FormDetails from "../../components/ContactDetails/FormDetails";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

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
      <FormDetails />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Contact;
