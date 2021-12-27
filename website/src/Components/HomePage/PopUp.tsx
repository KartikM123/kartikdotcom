import React, { Component } from "react";
import {default as ActivitiesJson} from "../../Static/activities.json";
import '../StyleSheets/PopUp.css';
import '../StyleSheets/Tags.css';
import logo from '../../images/test/square1.svg';
import logo2 from '../../images/test/square2.svg';
import logo3 from '../../images/test/square3.svg';
import { ProjectPopUp } from "./PopUpTypes/ProjectPopUp";
import { ResearchPopUp } from "./PopUpTypes/ResearchPopUp";
interface PopUpProps
{
    year: string;
    eventName: string;
    tagName: string;
    toggle: () => void;
}
interface PopUpState
{
    open: boolean
}

export class PopUpComponent extends Component<PopUpProps, PopUpState>
{
    constructor(props:PopUpProps)
    {
        super(props);
        this.state = 
        {
            open: true
        }
    }

    handleClick = () => {
        this.props.toggle();
    }

    relevantPopUp()
    {
        switch(this.props.tagName)
        {
            case "project":
                return (<ProjectPopUp year={this.props.year} eventName={this.props.eventName} tagName={this.props.tagName} toggle={this.props.toggle}/>);
            case "research":
                return (<ResearchPopUp year={this.props.year} eventName={this.props.eventName} tagName={this.props.tagName} toggle={this.props.toggle}/>);
            default:
                return (<div>unknown tag</div>)
        }
    }

    render()
    {
        var popUp = this.relevantPopUp();
        return (
            <div className="modal">
                <div className="modal_content">
                    <div className="modal_info">
                        <span className="close" onClick={this.handleClick}>&times;</span>
                        <p className="modal_title">{this.props.eventName}</p>

                        <p className={this.props.tagName + "Tag genericTag"}> {this.props.tagName} </p>
                        <p className="modal_description">add description</p>
                    </div>
                {popUp}
            </div>
        </div>
        )
    }
}