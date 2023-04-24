import React, { useState } from "react";
import {
  Card,
  Typography,
  Button,
  Tag,
  Space,
  Divider,
  Row,
  Col,
  Form,
  Input,
} from "antd";
import axios from "axios";
import Stats from "./Stats";
import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const CompanyProfile = ({ data }) => {
  const [prediction, setPrediction] = useState({
    bool: false,
    probability: {},
  });
  const { Title } = Typography;
  let allData = { ...data?.data?.organization };

  const getPrediction = () => {
    let object = { ...data?.data?.organization };
    let len = Object.keys(object?.funding_events).length;
    let last_fund_date = new Date(object?.latest_funding_round_date);
    let first_fund_obj =
      object?.funding_events[object?.funding_events.length - 1];
    let first_fund_date = new Date(first_fund_obj?.date);
    console.log(first_fund_obj);
    let values = {
      funding_total_usd: object?.total_funding ? object?.total_funding : 0,
      funding_rounds: len !== null ? len : 0,
      first_funding_year:
        first_fund_obj !== undefined ? first_fund_date.getFullYear() : 0,
      last_funding_year: object?.latest_funding_round_date
        ? last_fund_date.getFullYear()
        : 0,
      founded_year: object?.founded_year,
      months_bw_fundings:
        first_fund_obj !== undefined
          ? last_fund_date.getMonth() - first_fund_date.getMonth()
          : 0,
      average_funded_per_round: object?.total_funding
        ? object?.total_funding / len
        : 0,
      is_software: object?.keywords.find((a) => a.includes("software")) ? 1 : 0,
      is_biotech: object?.keywords.find((a) => a.includes("biotech")) ? 1 : 0,
      is_curatedweb: object?.keywords.find((a) => a.includes("curatedweb"))
        ? 1
        : 0,
      is_mobile: object?.keywords.find((a) => a.includes("mobile")) ? 1 : 0,
      is_Ecommerce: object?.keywords.find((a) => a.includes("Ecommerce"))
        ? 1
        : 0,
      is_usa: object?.country == "United States" ? 1 : 0,
    };
    axios({
      // Endpoint to send files
      url: `http://127.0.0.1:8000`,
      method: "POST",
      data: values,
    })
      // Handle the response from backend here
      .then((res) => {
        console.log(res);
        setPrediction({ bool: true, probability: res });
      })

      // Catch errors if any
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  };
  return (
    <>
      <Row gutter={15}>
        <Col span={14}>
          <div
            style={{
              marginLeft: "5%",
              // width: "100%",
              // height: "100%",
              position: "relative",
            }}
          >
            <Card
              title={data?.data?.organization?.name}
              bordered={true}
              // style={{
              //   width: "50%",
              //   height: "50%",
              //   // margin: "12px 8px",
              //   boxSizing: "border-box",
              // }}
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
              <Card>
                <Space size={[0, 8]} wrap>
                  {allData?.keywords.map((val) => (
                    <Tag color="geekblue">{val}</Tag>
                  ))}
                </Space>
              </Card>
              <Divider orientation="left">
                <p
                  style={{
                    fontFamily: "monospace",
                    fontWeight: "bold",
                  }}
                >
                  Company Information{" "}
                </p>
              </Divider>
              <div style={{ margin: "5px" }}>
                <Row>
                  <Col>
                    <Card
                      style={{
                        backgroundColor: "#F0EEEE",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "monospace",
                          fontWeight: "bold",
                        }}
                      >
                        Description
                      </p>
                      <p
                        style={{
                          fontFamily: "monospace",
                          fontWeight: "bold",
                          color: "grey",
                        }}
                      >
                        {data?.data?.organization?.short_description}
                      </p>
                    </Card>
                  </Col>
                </Row>
                <div style={{ marginTop: "5px" }}>
                  <Row gutter={6}>
                    <Col>
                      <Card
                        style={{
                          borderRadius: "10px",
                          backgroundColor: "#F0EEEE",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          Industry
                        </p>
                        <p
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                            color: "grey",
                          }}
                        >
                          {" "}
                          {data?.data?.organization?.industry}
                        </p>
                      </Card>
                    </Col>
                    <Col>
                      <Card
                        style={{
                          borderRadius: "10px",
                          backgroundColor: "#F0EEEE",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          Founded Year
                        </p>
                        <p
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                            color: "grey",
                          }}
                        >
                          {" "}
                          {data?.data?.organization?.founded_year}
                        </p>
                      </Card>
                    </Col>
                    <Col>
                      <Card
                        style={{
                          borderRadius: "10px",
                          backgroundColor: "#F0EEEE",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          Employees
                        </p>
                        <p
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                            color: "grey",
                          }}
                        >
                          {" "}
                          {data?.data?.organization?.estimated_num_employees}
                        </p>
                      </Card>
                    </Col>
                  </Row>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <Row gutter={6}>
                    <Col>
                      <Card
                        style={{
                          borderRadius: "10px",
                          backgroundColor: "#F0EEEE",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          Address
                        </p>
                        <p
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                            color: "grey",
                          }}
                        >
                          {" "}
                          {data?.data?.organization?.raw_address}
                        </p>
                      </Card>
                    </Col>
                  </Row>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <Row gutter={6}>
                    <Col>
                      <Card
                        style={{
                          borderRadius: "10px",
                          backgroundColor: "#F0EEEE",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          Annual Revenue
                        </p>
                        <p
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                            color: "grey",
                          }}
                        >
                          {" "}
                          {data?.data?.organization?.annual_revenue} $
                        </p>
                      </Card>
                    </Col>
                    <Col>
                      <Card
                        style={{
                          borderRadius: "10px",
                          backgroundColor: "#F0EEEE",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                          }}
                        >
                          Total Funding
                        </p>
                        <p
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                            color: "grey",
                          }}
                        >
                          {" "}
                          {data?.data?.organization?.total_funding} $
                        </p>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </div>
              <Space size={[0, 8]} wrap>
                <Tag icon={<TwitterOutlined />} color="#55acee">
                  Twitter
                </Tag>
                <Tag icon={<FacebookOutlined />} color="#3b5999">
                  Facebook
                </Tag>
                <Tag icon={<LinkedinOutlined />} color="#55acee">
                  LinkedIn
                </Tag>
              </Space>
            </Card>
          </div>
        </Col>
        <Col span={8}>
          <Card>
            {!prediction?.bool && (
              <Button
                style={{ background: "blue" }}
                onClick={() => {
                  getPrediction();
                }}
              >
                Generate Signals
              </Button>
            )}

            {prediction?.bool && <Stats pred={prediction?.probability} />}
            {/* estimated_num_employees
    total_funding
    annual_revenue */}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CompanyProfile;
