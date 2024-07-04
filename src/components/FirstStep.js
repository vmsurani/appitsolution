import React, { useState } from 'react';
import { Form, Input, Button, Col, Row } from 'antd';
import { Layout } from 'antd';

const { Content } = Layout;

const FirstStep = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    setFormData({ name: '', email: '' });
  };

  return (
    <Content
      style={{
        // display: "flex",
       
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width:"100%",
        padding: "40px",
        background: "#f0f2f5", // Optional: background color to distinguish the form container
      }}
    >
      <Row justify="center">
        <Col xs={24} sm={18} md={12} lg={8}>
          <div
            style={{
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              borderRadius: "20px",
              background: "#fff",
              marginTop:"50px",
            }}
          >
            <Form onFinish={handleSubmit} layout="vertical">
              <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ borderRadius: "10px",padding:"10px" }}
                />
              </Form.Item>
              <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ borderRadius: "10px",padding:"10px" }}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </Content>
  );
};

export default FirstStep;
