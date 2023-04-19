import React, { useState } from "react";
import { Input, Typography } from "antd";
import CompanyProfile from "./CompanyProfile";
import Image from "next/image";
import axios from "axios";

const Searchbox = () => {
  const { Title } = Typography;
  const { Search } = Input;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const onSearch = (value) => {
    axios({
      // Endpoint to send files
      url: `https://api.apollo.io/v1/organizations/enrich?api_key=sB2R-mgUzTjUZx0WZVP6kw&domain=${value}`,
      method: "GET",
    })
      // Handle the response from backend here
      .then((res) => {
        console.log(res);
        setData(res);
        setLoading(true);
      })

      // Catch errors if any
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div>
      {loading ? (
        <CompanyProfile data={data} />
      ) : (
        <>
          <Image
            src="/Funders-logos.jpeg"
            alt="Picture of the author"
            width={300}
            height={250}
            style={{
              marginLeft: "38%",
            }}
          />
          <div
            style={{
              marginLeft: "30%",
              position: "relative",
              marginTop: "20px",
            }}
          >
            <Title level={2}>Get Information About any Company</Title>
          </div>

          <div
            style={{
              margin: "12px 8px",
              marginLeft: "500px",
              marginTop: "30px",
            }}
          >
            <Search
              style={{
                width: 250,
                position: "relative",
              }}
              placeholder={"Enter Company URL"}
              onSearch={onSearch}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Searchbox;
