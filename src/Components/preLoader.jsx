import React, { useEffect } from "react";
import './preloader.css'
import { preLoaderAnim } from "../animations";

const PreLoader = () => {
    
        useEffect(() => {
            preLoaderAnim()
        }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Peace</span>
        <span>Be</span>
        <span>The</span>
        <span>Journey.</span>
      </div>
    </div>
  );
};

export default PreLoader;