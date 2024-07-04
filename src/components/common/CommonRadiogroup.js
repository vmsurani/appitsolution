import React from "react";
import { Button, Col, Row, Radio } from "antd";

const CommonRadiogroup = ({
  DataArray,
  handleOnchange,
  datavalue,
  showradiobutton = true,
}) => {
  return (
    <Radio.Group onChange={handleOnchange} value={datavalue}>
      <Row gutter={[16, 16]} justify="center">
        {DataArray.map((item, index) => {
          return (
            <Col xs={24} sm={12}>
              {showradiobutton ? (
                <Radio.Button
                  value={item.label}
                  // className="radioButton"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                    width: "100%",
                    padding: "50px 20px",
                    borderRadius: "5%",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    fontSize: "large",
                  }}
                >
                  {item.icon && (
                    <item.icon
                      className="rounded-icon"
                      style={{
                        fontSize: "25px",
                        marginRight: "10px",
                      }}
                    />
                  )}
                  {item.label}
                </Radio.Button>
              ) : (
                <Radio
                  value={item.label}
                  //   className="radioButton"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                    width: "100%",
                    padding: "50px 20px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    borderRadius: "10%",
                    fontSize: "large",
                    border:
                      datavalue === item.label ? "2px solid #4069ff" : "none",
                  }}
                >
                  {item.label}
                </Radio>
              )}
            </Col>
          );
        })}
      </Row>
    </Radio.Group>
  );
};

export default CommonRadiogroup;
