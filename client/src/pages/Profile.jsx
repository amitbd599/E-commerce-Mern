import React from "react";
import Announcement from "../components/Announcement";
import Header from "../components/Header";

import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ProfileInner from "../components/ProfileInner";

const Profile = () => {
  return (
    <>
      {/* Announcement */}
      <Announcement />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title={"Profile"} />

      {/* ProfileInner */}
      <ProfileInner />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Profile;
