import React, { useState } from "react";
import { Layout, Steps, Button, Table, Row, Col, Typography } from "antd";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import FormTabel from "./components/common/FormTabel";
import "./styles.css";

const { Content } = Layout;
const { Step } = Steps;
const { Title, Paragraph } = Typography;

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Development",
    budget: "$5.000 - $10.000",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleServiceChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      service: e.target.value,
    }));
  };

  const handleBudgetChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      budget: e.target.value,
    }));
  };

  const next = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const reset = () => {
    setFormData({
      name: "",
      email: "",
      service: "Development",
      budget: "$5.000 - $10.000",
    });
    setCurrentStep(0);
    setSubmitted(false);
  };

  const steps = [
    {
      title: "Step 1",
      content: (
        <Step1 formData={formData} handleChange={handleChange} next={next} />
      ),
    },
    {
      title: "Step 2",
      content: (
        <Step2
          formData={formData}
          handleServiceChange={handleServiceChange}
          next={next}
          prev={prev}
        />
      ),
    },
    {
      title: "Step 3",
      content: (
        <Step3
          formData={formData}
          handleBudgetChange={handleBudgetChange}
          handleSubmit={handleSubmit}
          prev={prev}
        />
      ),
    },
  ];

  return (
    <>
      <Content
        style={{
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
          // background: "#f0f2f5",
        }}
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Title
            style={{
              fontWeight: "bold",
              marginBottom: "25px",
              lineHeight: "1.5",
              // letterSpacing: "0.5px",
              fontSize: "35px",
            }}
          >
            Get a project quote
          </Title>
          <Paragraph
            style={{
              fontSize: "18px",
              width: "500px",
              // marginTop: "-10px",
              paddingBottom: "20px",
              fontWeight: "400",
            }}
          >
            Please fill the form below to receive a quote for your project. Feel
            free to add as much detail as needed.
          </Paragraph>
        </div>
        <Row justify="center">
          <Col xs={24} sm={18} md={12} lg={8}>
            <div
              style={{
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                borderRadius: "10px",
                background: "#fff",
                width: "100%",
                maxWidth: "700px",
                textAlign: "center",
                margin: "auto",
                marginRight: "80px",
              }}
            >
              {!submitted ? (
                <>
                  <Steps current={currentStep} style={{ marginBottom: "20px" }}>
                    {steps.map((item) => (
                      <Step key={item.title} title={item.title} />
                    ))}
                  </Steps>
                  <div>{steps[currentStep].content}</div>
                </>
              ) : (
                <>
                  <FormTabel formData={formData} />
                </>
              )}
            </div>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default App;
