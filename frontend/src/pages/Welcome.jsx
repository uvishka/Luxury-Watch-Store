//import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "antd"; 
import DefaultLayout from "../components/DefaultLayout";

const Welcome = () => {
  return (
    <DefaultLayout className="p-2 bgc">
      <h2 className="text-3xl my-2 text-center bs1">
        Welcome to WIJE Luxury Watch Test1
      </h2>
      <Row gutter={[20, 16]}>
        {" "}
        
        <Col lg={13} xs={24}>
          <div className="text-center">
            
            <div className="my-4">
              <img
                src="https://www.swisswatchexpo.com/TheWatchClub/wp-content/uploads/2023/08/Patek-Philippe-Aquanaut-Steel-White-Dial-Diamond-Ladies-Watch-5067-and-Patek-Philippe-Aquanaut-Steel-Black-Dial-Diamond-Mens-Watch-5267-1200x747.jpg"
                style={{ width: "700px", height: "500px" }}
                alt="Admin"
              />
              <div className="mt-2">
                <button className="p-2 bg-sky-300 w-40 text-black btn1 boldtext">
                  <Link to={"/admins/adminlogin"}>Admin Login</Link>
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={8} xs={24}>
          <div className="text-center">
            <div className="my-4">
              <img
                src="https://www.swisswatchexpo.com/TheWatchClub/wp-content/uploads/2023/10/Rolex-GMT-Master-and-GMT-Master-II-Pepsi-Models.jpg"
                style={{ width: "700px", height: "500px" }}
                alt="User"
              />
              <div className="mt-2">
                <button className="p-2 bg-sky-300 w-40 text-black btn1 boldtext">
                  <Link to={"/users/login"}>User Login</Link>
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default Welcome;
