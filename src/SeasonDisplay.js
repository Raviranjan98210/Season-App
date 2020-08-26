import "./SeasonDisplay.css";
import React from "react";

function getSeason(lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
}
const seasonConfig = {
  summer: {
    text: "Let's hit the beach, It is Summer",
    iconName: "sun",
  },
  winter: {
    text: "Burr! It is cold",
    iconName: "snowflake",
  },
};

const Season = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`massive ${iconName} icon ${season} icon-left`}></i>
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon ${season} icon-right`}></i>
    </div>
  );
};

export default Season;
