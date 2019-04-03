import React from "react";
import {RecommendedCard} from "./homePage";
import QuestionCard from "./questionCard"

export default class QuestionPageFeed extends React.Component{
    render(){
        return (
            <div className="home-page-feed card-list">
                <RecommendedCard />
                <div className="rec-card-list">
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                </div>
            </div>
        );
    }
}