import React, { Component } from "react";
import {default as ActivitiesJson} from "../../../Static/activities.json";
import '../../StyleSheets/PopUp.css';
import '../../StyleSheets/Tags.css';
import logo from '../../../images/test/square1.svg';
import logo2 from '../../../images/test/square2.svg';
import logo3 from '../../../images/test/square3.svg';
interface ProjectPopUpProps
{
    year: string;
    eventName: string;
    tagName: string;
    toggle: () => void;
}
interface ProjectPopUpState
{
    open: boolean
}

export class ProjectPopUp extends Component<ProjectPopUpProps, ProjectPopUpState>
{
    constructor(props:ProjectPopUpProps)
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

    render()
    {
        return (
            <div className="modal_info">
                <div className="modal_images">
                    <img src={logo} className="modalImage1"/>
                    <img src={logo2} className="modalImage2"/>
                    <img src={logo3} className="modalImage3"/>     
                </div>
                <p className="modal_fulldescription"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                </p>

                <div className ="modal_links">
                    <p className="readLink"><a href="https://localhost:3000"> read about it </a></p>
                    <p className="githubLink"><a href="https://github.com/KartikM123"> see it on github </a></p>
                    <p className="otherLink"><a href="https://localhost:3000"> see it in action </a></p>
                </div>
            </div>
        )
    }
}