import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

import CommonTitle from "./common/CommonTitle";

const Step1 = ({ formData, handleChange, next }) => {
  return (
    <div>
      <CommonTitle
        title="Contact Details"
        description="Please provide your contact details."
      />

      <Form onFinish={next} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            letterSpacing: "0.4px",
            textAlign: "left",
          }}
        >
          <Input
            name="name"
            placeholder="Write your name"
            value={formData.name}
            onChange={handleChange}
            suffix={
              <UserOutlined
                style={{
                  color: "darkgrey",
                  fontSize: "20px",
                  width: "20px",
                  height: "20px",
                }}
              />
            }
            style={{
              borderRadius: "25px",
              height: "50px",
              border: "none",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input a valid email!",
            },
          ]}
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            letterSpacing: "0.4px",
            textAlign: "left",
          }}
        >
          <Input
            type="email"
            name="email"
            placeholder="Write your email"
            value={formData.email}
            suffix={
              <MailOutlined
                style={{
                  color: "darkgrey",
                  fontSize: "20px",
                  width: "20px",
                  height: "20px",
                }}
              />
            }
            onChange={handleChange}
            style={{
              borderRadius: "25px",
              height: "50px",
              border: "none",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
        </Form.Item>
        <Form.Item>
          <div style={{ textAlign: "right", paddingTop: "20px" }}>
            <Button
              style={{
                width: "180px",
                height: "50px",
                borderRadius: "25px",
                margin: "0 10px",
                fontSize: "18px",
                fontWeight: "600",
                border: "1px solid ",
              }}
              type="primary"
              htmlType="submit"
            >
              Next
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Step1;
