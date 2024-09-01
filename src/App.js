import React from "react";
import { Route, Routes } from "react-router-dom";
import AllMetups from "./pages/AllMetups";
import NewMetups from "./pages/NewMetups";
import Favourite from "./pages/Favourite";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <div>
      <Layout>
      <Routes>
        <Route path="/" element={<AllMetups />} />
        <Route path="/new-meetups" element={<NewMetups />} />
        <Route path="/favourites" element={<Favourite/>} />
      </Routes>
      </Layout>
    </div>
    );
};

export default App;
