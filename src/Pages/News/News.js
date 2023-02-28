import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummary from "../Shared/NewsSummary/NewsSummary";

const News = () => {
  const newsinfo = useLoaderData();
  return (
    <div>
      <h6>This is News Page: {newsinfo.length}</h6>
      {newsinfo.map((news) => (
        <NewsSummary key={news._id} news={news}></NewsSummary>
      ))}
    </div>
  );
};

export default News;
