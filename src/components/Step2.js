import React from "react";
import { Button, Col, Row, Radio } from "antd";
import {
  CodepenCircleOutlined,
  SettingFilled,
  CodeFilled,
  OpenAIOutlined,
} from "@ant-design/icons";
import CommonTitle from "./common/CommonTitle";
import CommonRadiogroup from "./common/CommonRadiogroup";

const Step2 = ({ formData, handleServiceChange, next, prev }) => {
  const options = [
    {
      label: "Development",
      icon: CodepenCircleOutlined,
    },
    {
      label: "Web Design",
      icon: OpenAIOutlined,
    },
    {
      label: "Marketing",
      icon: CodeFilled,
    },
    {
      label: "Other",
      icon: SettingFilled,
    },
  ];

  return (
    <div>
      <CommonTitle
        title="Our Services"
        description="Please select which service you are interested in."
      />

      <CommonRadiogroup
        DataArray={options}
        handleOnchange={handleServiceChange}
        datavalue={formData.service}
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
          onClick={next}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step2;
