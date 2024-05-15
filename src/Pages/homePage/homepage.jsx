import React from 'react';
import Navbar from "../../Components/navBar";
import Intro from "../../Components/intro";
import Skills from "../../Components/skills";
import Contact from '../../Components/Contact';
import Footer from '../../Components/Footer/index';
import PreLoader from '../../Components/preLoader'
import { Link } from "react-router-dom";

const homePage = () => {
  return (
    <div>
      <PreLoader />
      <Intro />
      <Navbar />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default homePage;
