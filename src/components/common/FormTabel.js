import React from "react";
import { Layout, Steps, Button, Table, Row, Col, Typography } from "antd";

const FormTabel = ({ formData }) => {
  const { Title, Paragraph } = Typography;

  const columndata = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
    },
    {
      title: "Budget",
      dataIndex: "budget",
      key: "budget",
    },
  ];

  return (
    <div>
      <Title
        level={4}
        style={{
          fontWeight: "bold",
          marginBottom: "10px",
          lineHeight: "1.5",
          letterSpacing: "0.5px",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        Form Data
      </Title>
      <Paragraph
        style={{
          fontSize: "18px",
          lineHeight: "1.6",
          letterSpacing: "0.5px",
          marginBottom: "15px",
          textAlign: "center",
          paddingBottom: "20px",
        }}
      >
        This Screen Displays Submitted Form Data
      </Paragraph>
      <Table
        dataSource={[
          {
            key: "1",
            name: formData.name,
            email: formData.email,
            service: formData.service,
            budget: formData.budget,
          },
        ]}
        columns={columndata}
        pagination={false}
        style={{ marginBottom: "20px" }}
      />
      {/* <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Button
          type="primary"
          onClick={reset}
          style={{
            width: "180px",
            height: "50px",
            borderRadius: "25px",
            margin: "0 10px",
            fontSize: "18px",
            fontWeight: "600",
            border: "1px solid ",
          }}
        >
          Reset
        </Button>
      </div> */}
    </div>
  );
};

export default FormTabel;
