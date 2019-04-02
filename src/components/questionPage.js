import React from "react";
import {RecommendedCard} from "./homePage";

export default class QuestionPageFeed extends React.Component{
    render(){
        return (
            <div className="home-page-feed card-list">
                <RecommendedCard />
                <div className="rec-card-list">
                </div>
            </div>
        );
    }
}