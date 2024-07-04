import React from "react";
import { Button, Col, Row, Radio } from "antd";
import CommonTitle from "./common/CommonTitle";
import CommonRadiogroup from "./common/CommonRadiogroup";

const Step3 = ({ formData, handleBudgetChange, handleSubmit, prev }) => {
  const options = [
    {
      label: "$5.000 - $10.000",
    },
    {
      label: "$10.000 - $20.000",
    },
    {
      label: "$20.000 - $50.000",
    },
    {
      label: "$50.000+",
    },
  ];
  return (
    <div>
      <CommonTitle
        title="What's Your Project Budget?"
        description="Please select a project budget range you have in mind."
      />
      <CommonRadiogroup
        DataArray={options}
        handleOnchange={handleBudgetChange}
        datavalue={formData.budget}
        showradiobutton={false}
      />
    

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "20px",
        }}
      >
        <Button
          style={{
            width: "180px",
            height: "50px",
            borderRadius: "25px",
            margin: "0 10px",
            fontSize: "18px",
            fontWeight: "600",
            color: "blue",
            border: "1px solid blue ",
          }}
          onClick={prev}
        >
          Previous
        </Button>
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
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Step3;



  {/* <Radio.Group onChange={handleBudgetChange} value={formData.budget}>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12}>
            <Radio
              value="Under $1,000"
              className="radioButton"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60px",
                width: "100%",
                padding: "10px 20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              Under $1,000
            </Radio>
          </Col>
          <Col xs={24} sm={12}>
            <Radio
              value="$1,000 - $5,000"
              className="radioButton"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60px",
                width: "100%",
                padding: "10px 20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              $1,000 - $5,000
            </Radio>
          </Col>
          <Col xs={24} sm={12}>
            <Radio
              value="$5,000 - $10,000"
              className="radioButton"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60px",
                width: "100%",
                padding: "10px 20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              $5,000 - $10,000
            </Radio>
          </Col>
          <Col xs={24} sm={12}>
            <Radio
              value="$10,000+"
              // className="radioButton"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60px",
                width: "100%",
                padding: "10px 20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              $10,000+
            </Radio>
          </Col>
        </Row>
      </Radio.Group> */}