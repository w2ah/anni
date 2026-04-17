import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import StoryHome from "./stories/StoryHome";

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/story-details" component={StoryHome} />
    </Switch>
  );
}

export default Main;
