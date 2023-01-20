import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./component/Detail";
import Home from "./component/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default Router;
