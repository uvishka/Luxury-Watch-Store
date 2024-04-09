/* eslint-disable no-unused-vars */
import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";

const Book = () => {
    function onFinish(values) {
        console.log(values);
        // Show an alert message when the form is submitted
        alert("Your Booking is placed!");
    }

    return (
        <DefaultLayout>
            <div className="flux justify-between items-center bgc">
                <h2 className="text-3xl my-8 text-center bs1">Book An Appointment</h2>

            </div>
            <div className="order">
                <Row gutter={16} className="d-flex align-items-center">
                    <button
                        className="custom-button btn1 my-2"
                        onClick={() => {
                            window.history.back();
                        }}
                    >
                        Go Back
                    </button>

                    <Col lg={16} style={{ position: "relative" }}>
                        <img
                            src="https://www.swisswatchexpo.com/TheWatchClub/wp-content/uploads/2023/03/Rolex-Submariner-18k-Yellow-Gold-Black-Dial-Bezel-Mens-Watch-126618-1.jpg"
                            alt="Order Vehicle"
                            style={{ maxWidth: "100%" }}
                        />

                    </Col>

                    <Col lg={8} className="text-left p-5">
                        <Form
                            layout="vertical"
                            className="order-form p-5"
                            onFinish={onFinish}
                        >
                            <h2>Book</h2>
                            <hr />

                            <Form.Item
                                name="name"
                                label="Name :"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                label="E-mail :"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="contactno"
                                label="Contact No :"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="country"
                                label="Country :"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="requestprice"
                                label="Request Price :"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="appointmenttype"
                                label="Appointment Type:"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>


                            <button className="btn1 mt-2 mb-3">Submit</button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </DefaultLayout>
    );
};

export default Book;
