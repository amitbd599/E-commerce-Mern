import React from "react";
import Announcement from "../components/Announcement";
import Header from "../components/Header";

import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import OTPVerifyUser from "../components/OTPVerifyUser";

const OTPVerify = () => {
  return (
    <>
      {/* Announcement */}
      <Announcement />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title={"OTP Verify"} />

      {/* LoginInner */}
      <OTPVerifyUser />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default OTPVerify;
