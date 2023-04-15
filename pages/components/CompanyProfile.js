import React from "react";
import { Card, Typography } from "antd";

const CompanyProfile = ({ data }) => {
  const { Title } = Typography;
  return (
    <div>
      <Card
        title={data?.data?.organization?.name}
        bordered={true}
        style={{
          width: "50%",
          height: "50%",
          // margin: "12px 8px",
          // marginLeft: "500px",
          boxSizing: "border-box",
        }}
        bodyStyle={{ padding: "5px" }}
        headStyle={{ backgroundColor: "#E6ECF0" }}
        cover={
          <div
            style={{
              marginLeft: "50px",
              marginTop: "5px",
              marginBottom: "5px",
              borderRadius: "10px",
            }}
          >
            <img alt="example" src={data?.data?.organization?.logo_url} />
          </div>
        }
      >
        <Title level={3}>Industy: {data?.data?.organization?.industry}</Title>
        <Title level={3}>
          Founded Year: {data?.data?.organization?.founded_year}
        </Title>
        <Title level={3}>
          Address: {data?.data?.organization?.raw_address}
        </Title>
        <Title level={4}>{data?.data?.organization?.short_description}</Title>
      </Card>
    </div>
  );
};

export default CompanyProfile;
