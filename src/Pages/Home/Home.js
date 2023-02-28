import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummary from "../Shared/NewsSummary/NewsSummary";

const Home = () => {
  const news = useLoaderData();
  return (
    <div>
      {news.map((news) => (
        <NewsSummary news={news}></NewsSummary>
      ))}
    </div>
  );
};

export default Home;
