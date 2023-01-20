import Navbar from "./Navbar";
import React, { useState } from "react";
import Row from "./Row";
import requests from "../request";
import Search from "./Search";
import Footer from "./Footer";

function Home() {
  const [query, setquery] = useState("");
  const [tvid, settvid] = useState();
  return (
    <div>
      <Navbar query={query} setquery={setquery} />
      {query ? (
        <Search query={query} tvid={tvid} settvid={settvid} />
      ) : (
        <div>
          {requests.map((data, ind) => (
            <Row
              key={ind}
              title={data.title}
              fetchUrl={data.URL}
              tvid={tvid}
              settvid={settvid}
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Home;
