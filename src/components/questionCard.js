import React from "react";
import { CardQuestionHeader } from "./recCard";

export default class QuestionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfOptions: this.props.numberOfOptions
    };
  }
  render() {
    const cardImageStyle = {
      backgroundImage:
        "url('https://cdn.slant.co/447c8db4-326f-4853-b4c8-42346fc3c897/-/format/jpeg/-/progressive/yes/-/preview/480x480/')",
      backgroundSize: "cover"
    };
    return (
      <div
        className="rec-card card-list-item has-footer question-card"
        style={cardImageStyle}
      >
        <CardQuestionHeader />
        <div className="card-option-list">
          <a href="#" className="question-card-option">Xonotic</a>
          <a href="#" className="question-card-option">Cambria</a>
          <a href="#" className="question-card-option">Adeleovic</a>
          <a href="#" className="question-card-option hidden-options">
            +17 options
          </a>
          <a href="#" className="question-card-option add-new-option">
            add new option
          </a>
        </div>
      </div>
    );
  }
}
