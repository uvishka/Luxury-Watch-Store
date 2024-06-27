/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Row, Col, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DefaultLayout2 from "../components/DefaultLayout2";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const data = {
            username,
            password,
        };

        axios
            .post("http://watch:5555/users/login", data)
            .then((response) => {
                if (response.status === 200) {
                    console.log("Login successful");
                    message.success("User Login Successful");
                    navigate("/homeusers"); 
                } else {
                    console.error("Login failed with status:", response.status);
                    message.error("Login failed");
                }
            })
            .catch((error) => {
                console.error("Error during login:", error);
                message.error("User Login Failed");
            });
    };

    return (
        <DefaultLayout2 className="p-2 bgc ">
            <div className="login bgc">
                <Row gutter={16} className="d-flex align-items-center">
                    <Col lg={16} style={{ position: "relative" }}>
                        <img
                            src="https://www.swisswatchexpo.com/TheWatchClub/wp-content/uploads/2023/08/Audemars-Piguet-Royal-Oak-Jumbo-Yellow-Gold-Bruno-Mars-24K-Magic-World-Tour-Limited-Edition-Mens-Watch-15202BA-2048x1463.jpg"
                            style={{ width: "100%", height: "100%" }}
                            alt="WatchStore"
                        />
                        
                    </Col>

                    <Col lg={8} className="text-left p-5">
                        <Form layout="vertical" className="login-form p-5">
                            <h2>Login</h2>
                            <hr />

                            <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                                <Input value={username} onChange={(e) => setUsername(e.target.value)} />
                            </Form.Item>

                            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                                <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Item>

                            <button className="btn1 mt-2 mb-3" onClick={handleLogin}>
                                Login
                            </button>

                            <hr />

                            <Link to="/users/register">Click Here to Register</Link>
                        </Form>
                    </Col>
                </Row>
            </div>
        </DefaultLayout2>
    );
};

export default Login;
