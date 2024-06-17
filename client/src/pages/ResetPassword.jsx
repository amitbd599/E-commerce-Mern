import React from "react";
import Announcement from "../components/Announcement";
import Header from "../components/Header";

import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ResetPasswordUser from "../components/ResetPasswordUser";

const ResetPassword = () => {
  return (
    <>
      {/* Announcement */}
      <Announcement />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title={"Reset Password"} />

      {/* LoginInner */}
      <ResetPasswordUser />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ResetPassword;
