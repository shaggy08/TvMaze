import React, { useState, useEffect } from "react";
import request from "../axios";
import "./Search.css";
import requests from "../request";
import axios from "axios";
import { Loading } from "@nextui-org/react";

import { Link, useNavigate } from "react-router-dom";

function Search({ query, setquery }) {
  const [show, setshow] = useState({});
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  const baseURL = "/search/shows?q=";
  const fecthpost = async () => {
    setloading(true);
    const params = {
      params: {
        query: query,
      },
    };

    const result = await request.get(`/search/shows?q=:${query}`);
    setshow(result.data);

    setloading(false);
  };
  useEffect(() => {
    fecthpost();
  }, [query]);

  const handleclik = (id) => {
    navigate(`/detail/${id}`);

    setquery("");
  };
  return (
    <div className="search-cont">
      <div className="search-title">
        <h3>Showes similar to {query}</h3>
      </div>
      <div className="search-img-cont">
        <div className="search-img">
          {loading ? (
            <Loading size="lg" />
          ) : (
            show?.map((data, index) => (
              <img
                key={index}
                className="searchimg"
                src={data.show.image?.medium}
                alt={data.show?.name}
                onClick={() => handleclik(data.show.id)}
              ></img>
              // <Card1 imgurl={data.image.medium} name={data.name} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
