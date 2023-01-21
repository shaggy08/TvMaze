import React, { useState, useEffect, useRef } from "react";
import request from "../axios";
import "./Row.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useNavigate } from "react-router-dom";

import { Loading } from "@nextui-org/react";
function Row({ title, fetchUrl, query, tvid, settvid }) {
  const [show, setshow] = useState({});
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const fecthpost = async () => {
    setloading(true);

    const result = await request.get(fetchUrl);
    if (result.data.length > 30) {
      setshow(result.data.slice(0, 30));
    } else {
      setshow(result.data);
    }
    setloading(false);
  };
  useEffect(() => {
    fecthpost();
  }, []);
  const scrollContainerRef = useRef(null);

  const handleRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };
  const handleLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };
  const handleclik = (id) => {
    settvid(id);
    navigate(`/detail/${id}`);
  };

  return (
    <div className="row-cont">
      <div className="row-title">
        <h3>{title}</h3>
      </div>
      <div className="row-img-cont">
        <button className="row-btn" onClick={handleLeft}>
          <ArrowBackIosIcon />
        </button>
        <div className="row-img" ref={scrollContainerRef}>
          {loading ? (
            <Loading size="lg" />
          ) : (
            show.map((data, index) => (
              <img
                key={index}
                className="img"
                src={data.show.image ? data.show.image.medium : ""}
                alt="not found"
                onClick={() => handleclik(data.show.id)}
              ></img>
            ))
          )}
        </div>
        <button className="row-btn" onClick={handleRight}>
          {" "}
          <ArrowForwardIosIcon css={{ color: "white" }} />
        </button>
      </div>
    </div>
  );
}

export default Row;
