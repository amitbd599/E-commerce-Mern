import React from "react";
import Announcement from "../components/Announcement";
import Header from "../components/Header";

import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ForgotPasswordUser from "../components/ForgotPasswordUser";

const ForgotPassword = () => {
  return (
    <>
      {/* Announcement */}
      <Announcement />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title={"Forgot Password"} />

      {/* LoginInner */}
      <ForgotPasswordUser />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ForgotPassword;
