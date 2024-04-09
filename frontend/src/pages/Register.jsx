/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Row, Col, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = () => {
        const data = {
            username,
            password,
        };

        setLoading(true); 

        axios
            .post("http://localhost:5555/users/register", data)
            .then((response) => {
                setLoading(false); 

                if (response.status === 201) {
                    console.log("User registered successfully");
                    message.success("Registration successful"); 
                    navigate("/users/login");
                } else {
                    console.error("Registration failed with status:", response.status);
                    message.error("Registration failed"); 
                }
            })
            .catch((error) => {
                setLoading(false); 
                console.error("Error during registration:", error);
                message.error("Error during registration"); 
            });
    };

    return (
        <DefaultLayout className="p-2 bgc ">
            <div className="login bgc">
                <Row gutter={16} className="d-flex align-items-center">
                    <Col lg={16} style={{ position: "relative" }}>
                        <img
                            src="https://www.swisswatchexpo.com/TheWatchClub/wp-content/uploads/2023/10/5P8A0083.jpg"
                            style={{ width: "100%", height: "100%" }}
                            alt="WatchStore"
                        />
                        
                    </Col>

                    <Col lg={8} className="text-left p-5">
                        <Form layout="vertical" className="login-form p-5">
                            <h2>Register</h2>
                            <hr />

                            <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                                <Input value={username} onChange={(e) => setUsername(e.target.value)} />
                            </Form.Item>

                            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                                <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Item>

                            <Form.Item
                                name="cpassword"
                                label="Confirm Password"
                                dependencies={["password"]}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: "Please confirm your password",
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue("password") === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error("The two passwords do not match"));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <button className="btn1 mt-2 mb-3" onClick={handleRegister}>
                                {loading ? "Registering..." : "Register"}
                            </button>
                            <br />

                            <Link to="/users/login">Click Here to Login</Link>
                        </Form>
                    </Col>
                </Row>
            </div>
        </DefaultLayout>
    );
};

export default Register;
