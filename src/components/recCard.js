import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faTrophy,
  faComment,
  faExpandArrowsAlt
} from "@fortawesome/free-solid-svg-icons";

export class CardStats extends React.Component {
  render() {
    return (
      <div>
        <div className="card-list-stats">
          <div className=" card-list-stats-item">
            <a href="#">179 Recs</a>
          </div>
          <div className="card-list-stats-seperator">•</div>
          <span>
            <div className=" card-list-stats-item ">
              <a href="#">Gaming</a>
            </div>
            <div className=" card-list-stats-item ">
              <a href="#">PC</a>
            </div>
            <div className=" card-list-stats-item ">
              <a href="#">PC Games</a>
            </div>
            <div className=" card-list-stats-item ">
              <a href="#">+13 more</a>
            </div>
          </span>
        </div>
      </div>
    );
  }
}


function CardImageContent(props) {
  return (
    <div className="rec-card-image-content">
      <div className="rec-card-user-rec">
        <div className="rec-card-user-rec-content">
          <div className="rec-card-user-rec-content-header">
            RationalMarduk recommends
          </div>
          <a className=" rec-card-title" href="#" title="Xonotic">
            Xonotic
          </a>
        </div>
      </div>
    </div>
  );
}
export class CardQuestionHeader extends React.Component {
  render() {
    const caretIconSpanStyle = {
      backgroundColor: "white",
      borderRadius: "50%",
      color: "#1b9ad1",
      padding: "0px 4px",
      marginLeft: 6,
      marginRight: -4,
      fontSize: "medium"
    };
    return (
      <div className="rec-card-question-header">
        <CardStats />
        <div className="rec-card-question-header-flex">
          <h4 className="rec-card-question-title rec-card-question-header-content">
            <a href="#">
              What are the best free full offline games for PC that have good
              graphics?
            </a>
          </h4>
        </div>
      </div>
    );
  }
}
export class CardImage extends React.Component {
  render() {
    const cardImageStyle = {
      backgroundImage:
        "url('https://cdn.slant.co/447c8db4-326f-4853-b4c8-42346fc3c897/-/format/jpeg/-/progressive/yes/-/preview/480x480/')"
    };
    return (
      <div
        className="rec-card-image images-image-list-item-image"
        style={cardImageStyle}
      >
        <div className="rec-card-image-gradient">
          <CardQuestionHeader />
          <CardImageContent />
        </div>
      </div>
    );
  }
}
export default class RecCard extends React.Component {
  render() {
    return (
      <div className="rec-card card-list-item has-footer">
        <CardImage />
      </div>
    );
  }
}
