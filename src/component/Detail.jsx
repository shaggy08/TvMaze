import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";
import request from "../axios";
import Search from "./Search";
import Navbar from "./Navbar";
import { Loading } from "@nextui-org/react";
import Footer from "./Footer";
import Rating from "@mui/material/Rating";

function Detail() {
  const { id } = useParams();
  const [query, setquery] = useState("");
  const [loading, setloading] = useState(true);

  const [detail, setdeatil] = useState({});
  const [cast, setcast] = useState({});
  const rating = "5.5";
  const fetchpost = async () => {
    setloading(true);
    const result = await request.get(`/shows/${id}`);
    const resultcast = await request.get(`/shows/${id}/cast`);
    setdeatil(result.data);
    setcast(
      resultcast.data.length ? resultcast.data.slice(0, 5) : resultcast.data
    );
    if (resultcast.data.length == 0) {
      setcast([
        {
          person: {
            name: "Hugh Jackman",
          },
        },
      ]);
    }
    setloading(false);
  };
  useEffect(() => {
    fetchpost();
  }, [id]);

  return (
    <>
      <Navbar query={query} setquery={setquery} />
      {query ? (
        <Search query={query} setquery={setquery} />
      ) : (
        <>
          {loading ? (
            <Loading size="lg" />
          ) : (
            <div className="detail-cont">
              <div className="detail-img">
                <img src={detail.image.original}></img>
              </div>
              <div className="detail-info">
                <div className="detail-title">
                  <h3>{detail.name}</h3>
                  <p>
                    ( rating:{" "}
                    {detail.rating.average ? detail.rating.average : rating} )
                  </p>
                  <Rating
                    name="half-rating-read"
                    max={10}
                    value={
                      detail.rating.average ? detail.rating.average : rating
                    }
                    precision={0.5}
                    readOnly
                  />
                </div>
                <div className="detail-mid">
                  <div className="mid-upper">
                    <p>Premiered on: {detail.premiered} </p>
                  </div>

                  <div className="detail-cast">
                    <div className="cast">
                      <p>Cast: </p>
                      {cast.map((val, key) => (
                        <p>{val.person.name} ,</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<p>${detail.summary}</p>`,
                  }}
                  className="detail-summar"
                ></div>
              </div>
            </div>
          )}
        </>
      )}
      <Footer />
    </>
  );
}

export default Detail;
