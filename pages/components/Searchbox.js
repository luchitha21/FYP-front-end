import React, { useState } from "react";
import { Input, Form } from "antd";
import axios from "axios";

const Searchbox = () => {
  const { Search } = Input;
  const [loading, setLoading] = useState(false);

  const onSearch = (value) => {
    setLoading(true);
    axios({
      // Endpoint to send files
      url: `https://api.apollo.io/v1/organizations/enrich?api_key=sB2R-mgUzTjUZx0WZVP6kw&domain=${value}`,
      method: "GET",
    })
      // Handle the response from backend here
      .then((res) => {
        console.log(res);
        setLoading(false);
      })

      // Catch errors if any
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Enter Company URL</h2>
      <Search
        style={{
          margin: "12px 8px",
          width: 200,
        }}
        onSearch={onSearch}
      />
    </div>
  );
};

export default Searchbox;
