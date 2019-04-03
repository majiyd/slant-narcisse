import React from "react";
import {CardImage, CardQuestionHeader} from './recCard'

export default class QuestionCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numberOfOptions: this.props.numberOfOptions,
        }
    }
    render(){
        return (
            <div className="rec-card card-list-item has-footer">
                <CardQuestionHeader />
                <div className="card-option-list">
                    <CardImage />
                    <CardImage />
                    <CardImage />
                </div>
            </div>
        );
    }
}