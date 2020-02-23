import React from "react";
import "./Homepage.scss";

import Layout from "../../components/Layout";

const Homepage = () => {
  return (
    <Layout>
      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h2 className="title">HATS</h2>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h2 className="title">HATS</h2>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h2 className="title">HATS</h2>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
