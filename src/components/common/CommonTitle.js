import React from "react";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;

const CommonTitle = ({ title="", description="" }) => {
  return (
    <>
      <Title
        level={4}
        style={{
          fontWeight: "bold",
          marginBottom: "10px",
          lineHeight: "1.5",
          letterSpacing: "0.5px",
          fontSize: "24px",
          textAlign: "left",
        }}
      >
        {/* Our Services */}
        {title}
      </Title>
      <Paragraph
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          letterSpacing: "0.4px",
          marginBottom: "20px",
          textAlign: "left",
          paddingBottom: "20px",
        }}
      >
        {/* Please select which service you are interested in. */}
        {description}
      </Paragraph>
    </>
  );
};

export default CommonTitle;
