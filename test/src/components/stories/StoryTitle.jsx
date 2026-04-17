import React from "react";
import { Link } from "react-router-dom";

function StoryTitle() {
  return (
    <section id="story-details">
      <div className="story-title-container">
        <div className="story-detail-img"></div>

        <div className="story-detail-content">
          <h2>Story Details</h2>
          <ol>
            <li className="first-item">
              <Link to="/">Home</Link>
            </li>
            <li className="last-item">Story Details</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default StoryTitle;
