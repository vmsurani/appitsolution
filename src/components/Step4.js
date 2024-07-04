import React from 'react';
import { Button, Table, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Step4 = ({ formData, prev }) => {
  const columns = [
    {
      title: 'Field',
      dataIndex: 'field',
      key: 'field',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ];

  const dataSource = [
    {
      key: '1',
      field: 'Name',
      value: formData.name,
    },
    {
      key: '2',
      field: 'Email',
      value: formData.email,
    },
    {
      key: '3',
      field: 'Service',
      value: formData.service,
    },
    {
      key: '4',
      field: 'Budget',
      value: formData.budget,
    },
  ];

  return (
    <div>
      <Title
        level={4}
        style={{
          fontWeight: 'bold',
          marginBottom: '10px',
          lineHeight: '1.5',
          letterSpacing: '0.5px',
          fontSize: '24px',
        }}
      >
        Confirm Your Details
      </Title>
      <Paragraph
        style={{
          fontSize: '16px',
          lineHeight: '1.6',
          letterSpacing: '0.4px',
          marginBottom: '20px',
        }}
      >
        Please confirm the details below before submitting.
      </Paragraph>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        style={{ marginBottom: '20px' }}
      />
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button
          style={{
            width: '180px',
            height: '50px',
            borderRadius: '25px',
            margin: '0 10px',
            fontSize: '18px',
            fontWeight: '600',
            color: 'blue',
            border: '1px solid blue ',
          }}
          onClick={prev}
        >
          Previous
        </Button>
        <Button
          style={{
            width: '180px',
            height: '50px',
            borderRadius: '25px',
            margin: '0 10px',
            fontSize: '18px',
            fontWeight: '600',
            border: '1px solid ',
          }}
          type="primary"
          onClick={() => console.log('Submitting:', formData)}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Step4;
