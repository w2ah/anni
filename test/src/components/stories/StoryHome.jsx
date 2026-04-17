import React from "react";
import StoryHeader from "./StoryHeader";
import StoryTitle from "./StoryTitle";
import StoryDetails from "./StoryDetails";
import StoryFooter from "./StoryFooter";

function StoryHome() {
  return (
    <section id="home">
      <div className="container-fluid">
        <StoryHeader />
        <StoryTitle />
        <StoryDetails />
        <StoryFooter />
      </div>
    </section>
  );
}

export default StoryHome;
